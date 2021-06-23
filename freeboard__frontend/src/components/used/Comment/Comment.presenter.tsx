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

export default function CommentUI({handeChangeInput}) {
    return (
        <Wrapper>
            <DivideLine></DivideLine>
            <ImgCommentWrapper>
                <IconImg src="/Comment.png"></IconImg>
                <Question>문의하기</Question>
            </ImgCommentWrapper>
            <CommentBoxWrapper>
                <CommentBox placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentBox>
                <CommentQuestionWrapper>
                    <CommentCount>0/100</CommentCount>
                    <QuestionButton>문의하기</QuestionButton>
                </CommentQuestionWrapper>
            </CommentBoxWrapper>
            <WriterImgWrapper>
                <ProfileWrapper>
                    <ProfileImg src="/profileImg.png"></ProfileImg>
                    <WriterCommentWrapper>
                        <Writer>노원두</Writer>
                        <Comment>가격이 조금 비싸네요.</Comment>
                    </WriterCommentWrapper>
                </ProfileWrapper>
                <CommentImg src="/CommentImg.png"></CommentImg>
            </WriterImgWrapper>
            <CommentDate>2021.02.22</CommentDate>
            <CommentDivideLine></CommentDivideLine>
        </Wrapper>
    );
}
