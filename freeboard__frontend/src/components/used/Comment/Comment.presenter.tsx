import {
    Wrapper,
    DivideLine,
    IconImg,
    Question,
    CommentBox,
    CommentCount,
    QuestionButton,
    ImgCommentWrapper,
    CommentQuestionWrapper,
    CommentBoxWrapper,
    ProfileImg,
    Writer,
    Comment,
    CommentDivideLine,
    CommentDate,
    WriterCommentWrapper,
    ProfileWrapper,
    CommentImg,
    WriterImgWrapper,
} from './Comment.style';

export default function CommentUI({
    handeChangeInput,
    writeQuestion,
    data,
    contentRef,
}) {
    return (
        <>
            <Wrapper>
                <DivideLine></DivideLine>
                <ImgCommentWrapper>
                    <IconImg src="/Comment.png"></IconImg>
                    <Question>문의하기</Question>
                </ImgCommentWrapper>
                <CommentBoxWrapper>
                    <CommentBox
                        ref={contentRef}
                        name="contents"
                        onChange={handeChangeInput}
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    ></CommentBox>
                    <CommentQuestionWrapper>
                        <CommentCount>0/100</CommentCount>
                        <QuestionButton onClick={writeQuestion}>
                            문의하기
                        </QuestionButton>
                    </CommentQuestionWrapper>
                </CommentBoxWrapper>

                {data?.fetchUseditemQuestions?.map((question, key) => {
                    console.log(question);
                    return (
                        <div key={key}>
                            <WriterImgWrapper>
                                <ProfileWrapper>
                                    <ProfileImg src="/profileImg.png"></ProfileImg>
                                    <WriterCommentWrapper>
                                        <Writer>{question.user.name}</Writer>
                                        <Comment>{question.contents}</Comment>
                                    </WriterCommentWrapper>
                                </ProfileWrapper>
                                <CommentImg src="/CommentImg.png"></CommentImg>
                            </WriterImgWrapper>
                            <CommentDate>
                                {question.createdAt.slice(0, 10)}
                            </CommentDate>
                            <CommentDivideLine></CommentDivideLine>
                        </div>
                    );
                })}
            </Wrapper>
        </>
    );
}
