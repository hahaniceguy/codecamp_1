import {Checkbox1, Number, Wrapper, TitleWrapper, Num, MainTitle,
        CreatedAT, MainWapper, CreatedAtWrapper, CheckboxWrapper,
        CoverWapper, Twowrapper, Select} from "./BoardList.styles";

export default function BoardPageUI({data}){

    console.log(data?.fetchBoards,"data")
    // data.map((data) => ({number: data.number, title: data.title, createdAT: data.createdAT}))
    return (
        <div>
            <MainWapper>
                <Checkbox1 type = "checkbox"></Checkbox1>
                <Num>번호</Num>
                <MainTitle>제목</MainTitle>
                <CreatedAT>작성일</CreatedAT>
            </MainWapper>
            <div>{data?.fetchBoards.map((data) => 
            <Wrapper>
                <Checkbox1 type = "checkbox"></Checkbox1>
                <Number>{data.number}</Number>
                <TitleWrapper>{data.title}</TitleWrapper>
                <CreatedAtWrapper>{data.createdAt.slice(0,10)}</CreatedAtWrapper>
            </Wrapper>
            )}</div>
            <Select>선택 삭제</Select>
        </div>
            )

}