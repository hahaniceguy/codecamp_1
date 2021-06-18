import styled from "@emotion/styled";

export default function ListPage() {

    const fruits = [
        {number: 1, title: "레드향"       },
        {number: 2, title: "샤인머스켓"   },
        {number: 3, title: "산청딸기"     },
        {number: 4, title: "한라봉"       },
        {number: 5, title: "사과"         },
        {number: 6, title: "애플망고"     },
        {number: 7, title: "딸기"         },
        {number: 8, title: "천혜향"       },
        {number: 9, title: "과일선물세트" },
        {number: 10, title: "귤"          },
    ]
    // const aaa = ["철수", "영희", "훈이"]
    // aaa.map((data) => <div>{data}</div>)
    //const aaa = [<div>철수</div>, <div>영희</div>, <button>클릭해주세요</button>]

        // return (
        //     <div>{fruits.map((data) => <div><Number>{data.number}</Number>{data.title}</div>)}</div>
        // )

        return (
            <div>
                {fruits.filter ((data) => (data.number % 2 === 0)).
                        map((data) => <div>{data.number} {data.title}</div>)}
            </div>
        )

}

export const Number = styled.span`
    font-weight : 700;
`