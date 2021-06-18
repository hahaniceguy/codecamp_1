import {
  Wrapper,
  Shadow,
  Body,
  HeaderDate,
  HeaderLeftWrapper,
  HeaderLinkImg,
  HeaderNavImg,
  HeaderProfileImg,
  HeaderRightWrapper,
  HeaderWrapper,
  HeaderWriter,
  HeaderWriterWrapper,
  DivideLine,
  ContentsWrapper,
  Title,
  Content,
  LikeBtnWrapper,
  LikeWrapper,
  LikeImg,
  LikeCount,
  DisLikeWrapper,
  DisLikeImg,
  DisLikeCount,
  TitleWrapper,
} from './BoardPage.style';

export default function BoardPageUI({board}) {
  return (
    <Wrapper>
      <Shadow>
        <Body>
          <HeaderWrapper>
            <HeaderLeftWrapper>
              <HeaderProfileImg src="/profileImg.png"></HeaderProfileImg>
              <HeaderWriterWrapper>
                <HeaderWriter>{board?.fetchBoard.writer}</HeaderWriter>
                <HeaderDate>
                  {board ? board.fetchBoard.createdAt.slice(0, 10) : <></>}
                </HeaderDate>
              </HeaderWriterWrapper>
            </HeaderLeftWrapper>
            <HeaderRightWrapper>
              <HeaderLinkImg src="/link.png"></HeaderLinkImg>
              <HeaderNavImg src="/nav.png"></HeaderNavImg>
            </HeaderRightWrapper>
          </HeaderWrapper>
          <DivideLine></DivideLine>
          <ContentsWrapper>
            <TitleWrapper>
              <Title>{board && board.fetchBoard.title}</Title>
            </TitleWrapper>
            <Content>{!board ? <></> : board.fetchBoard.contents}</Content>
            <LikeBtnWrapper>
              <LikeWrapper>
                <LikeImg src="/like.png"></LikeImg>
                <LikeCount>1920</LikeCount>
              </LikeWrapper>
              <DisLikeWrapper>
                <DisLikeImg src="/dislike.png"></DisLikeImg>
                <DisLikeCount>1920</DisLikeCount>
              </DisLikeWrapper>
            </LikeBtnWrapper>
          </ContentsWrapper>
        </Body>
      </Shadow>
    </Wrapper>
  );
}
