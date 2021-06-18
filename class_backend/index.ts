import {createConnection} from 'typeorm'
import {ApolloError, ApolloServer, gql, IResolvers} from 'apollo-server'
import Board from './Board.postgres'

//Backend API 서버 셋팅
const typeDefs = gql`
    type Return{
        message : String
    }

    type FetchBoardsReturn{
        writer : String
        age : Int
    }

    type Query{
        fetchBoards : [FetchBoardsReturn] #[]안에 들어갈 내용은 위 선언처럼 따로 type 이름 {} 안에 따로 작성 후 사용
    }

    type Mutation {
        createBoard(writer : String!, age : Int!) : Return
        deleteBoard(number : Int!) : Return
    }
`

const resolvers : IResolvers = {
    Query : {
        fetchBoards: () => {
            try {
                return Board.find({where: {deletedAt : null}}) //find는 배열 형태로 들어오기 때문에 API셋팅에서 배열[]로 감싸줘야 한다
                //const result await Board.find({where: {deletedAt : null}}) //다음줄까지의 코드를 위 한줄로 단축 가능
                //return result
            } catch (error) {
                throw new Error("데이터 조회 실패")
            }   
        }
    },
    Mutation: {
        createBoard: async(_, args) => {
            try {
                await Board.insert({ ...args })       //insert문 간결화   
                return {
                    message : "게시물이 등록 완료!"
                }; 
            } catch (error) {
                throw new Error("게시판에 글 등록하는데 에러났어요")
            }
            // Board.insert({
            //     writer : args.writer,  
            //     age : args.age
            // })
        },

        deleteBoard : (_, args) => {
            try {
                Board.update({number: args.number},{deletedAt: new Date()}) //왼쪽 조건 오른쪽 수정    
                return {
                    message : "게시글 삭제 완료!"
                }
            } catch (error) {
              throw new ApolloError("게시물 삭제에 실패했습니다.")
            }  
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers})


//데이터베이스 연결 및 셋팅
createConnection({

    type : "postgres",
    database : "postgres",
    username : "postgres",
    password : "postgres",
    port : 5006,
    host : "34.64.71.71",
    entities : [__dirname + "/*.postgres.ts"],
    logging : true,
    synchronize : true,

}).then(() => {
    console.log("접속완료!!");
    server.listen({port : 4000})
});
