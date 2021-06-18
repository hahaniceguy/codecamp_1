import {
  MainWrapper,
  Title,
  TitleImg,
  ListWrapper,
  ListTitle,
  ListProfile,
  ListWriter,
  ProfileWrapper,
  ListDate,
  DataWrapper,
  LikeImg,
  LikeCount,
  LikeWrapper,
  ContentsWrapper,
  TitleWrapper,
  TitleMainWrapper,
  Wrapper,
} from './BestList.styles';

export default function BestListUI({data, handleClick}) {
  return (
    <Wrapper>
      <MainWrapper>
        <Title>베스트 게시물</Title>
        <TitleMainWrapper>
          {' '}
          {data?.fetchBoardsOfTheBest.map((data) => (
            <TitleWrapper key={data._id}>
              <TitleImg
                src="/TitleImg.png"
                id={data._id}
                onClick={handleClick}
              ></TitleImg>
              <ListWrapper>
                <ListTitle id={data._id} onClick={handleClick}>
                  {data.title}
                </ListTitle>
                <ContentsWrapper>
                  <DataWrapper>
                    <ProfileWrapper>
                      <ListProfile src="/profileImg.png"></ListProfile>
                      <ListWriter>{data.writer}</ListWriter>
                    </ProfileWrapper>
                    <ListDate>{data.createdAt.slice(0, 10)}</ListDate>
                  </DataWrapper>
                  <LikeWrapper>
                    <LikeImg src="/like.png"></LikeImg>
                    <LikeCount>{data.likeCount}</LikeCount>
                  </LikeWrapper>
                </ContentsWrapper>
              </ListWrapper>
            </TitleWrapper>
          ))}
        </TitleMainWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
