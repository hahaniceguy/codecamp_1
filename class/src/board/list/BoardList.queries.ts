import {gql} from "@apollo/client"

export const FETCH__BOARDS = gql`
    query{
        fetchBoards{
        number
        title
        createdAt
     }
    }

`