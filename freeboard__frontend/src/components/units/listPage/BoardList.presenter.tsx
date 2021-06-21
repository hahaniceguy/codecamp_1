import {
    Number,
    Title,
    Writer,
    Data,
    TopWrapper,
    ContentNum,
    ContentTitle,
    ContentWriter,
    ContentData,
    ContentWrapper,
    Search,
    Magni,
    SearchWrapper,
    Calendar,
    Date,
    CalendarWrapper,
    MainCalendarWrapper,
    Retrieve,
    HighWrapper,
    Enrollment,
    EnrollmentWrapper,
    LineWrapper,
    Line,
    Wrapper,
    Pencle,
    EndWrapper,
    LeftArrowImg,
    NumCount,
    NumberWrapper,
    Empth,
} from './BoardList.style';

export default function BoardListUI({
    data,
    handleCreatePage,
    handleListClick,
    count,
    handleRightPage,
    pageArr,
    handleClickPage,
    handleLeftPage,
    currentPage,
    handleInput,
    handleClickSearch,
}) {
    return (
        <Wrapper>
            <HighWrapper>
                <SearchWrapper>
                    <Magni src="/Magni.png"></Magni>
                    <Search
                        type="text"
                        name="title"
                        placeholder="제목을 검색해주세요."
                        onChange={handleInput}
                    ></Search>
                </SearchWrapper>
                <MainCalendarWrapper>
                    <CalendarWrapper>
                        <Calendar src="/Cal.png"></Calendar>
                        <Date>2020.12.02</Date>
                        <Line>~</Line>
                        <Calendar src="/Cal.png"></Calendar>
                        <Date>2020.12.02</Date>
                    </CalendarWrapper>
                </MainCalendarWrapper>
                <Retrieve onClick={handleClickSearch}>검색하기</Retrieve>
            </HighWrapper>
            <LineWrapper>
                <TopWrapper>
                    <Number>번호</Number>
                    <Title>제목</Title>
                    <Writer>작성자</Writer>
                    <Data>날짜</Data>
                </TopWrapper>
                <div>
                    {data?.fetchBoards.slice(0, 10).map((data, index) => (
                        <ContentWrapper key={data._id}>
                            <ContentNum>
                                {(currentPage - 1) * 10 + index + 1}
                            </ContentNum>
                            <ContentTitle
                                onClick={handleListClick}
                                id={data._id}
                            >
                                {data.title}
                            </ContentTitle>
                            <ContentWriter>{data.writer}</ContentWriter>
                            <ContentData>
                                {data.createdAt.slice(0, 10)}
                            </ContentData>
                        </ContentWrapper>
                    ))}
                </div>
            </LineWrapper>
            <EndWrapper>
                <Empth></Empth>
                <NumberWrapper>
                    <LeftArrowImg
                        onClick={handleLeftPage}
                        src="/LeftArrow.png"
                    ></LeftArrowImg>
                    {pageArr.map((data) => (
                        <NumCount
                            key={data}
                            id={data}
                            onClick={handleClickPage}
                            isActive={currentPage === data}
                        >
                            {data}
                        </NumCount>
                    ))}
                    {/* {pageArr.map((data) => (<NumCount id={data} onClick={handleClickPage} Change={currentPage === data}  >{data}</NumCount>))} */}
                    <LeftArrowImg
                        id="rightPoint"
                        onClick={handleRightPage}
                        src="/RightArrow.png"
                    ></LeftArrowImg>
                </NumberWrapper>
                <EnrollmentWrapper>
                    <Pencle src="/Pencle.png"></Pencle>
                    <Enrollment onClick={handleCreatePage}>
                        게시물 등록하기
                    </Enrollment>
                </EnrollmentWrapper>
            </EndWrapper>
        </Wrapper>
    );
}
