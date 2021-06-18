import {isRequiredArgument} from 'graphql';
import {ProvidedRequiredArgumentsOnDirectivesRule} from 'graphql/validation/rules/ProvidedRequiredArgumentsRule';
import {
  Title,
  Image,
  MainWrapper,
  Content,
  Video,
  SecondWrarper,
  ThirdWarrper,
  Container,
  Fourth,
  FourWrapper,
  Box,
  Disbox,
  FfWrapper,
  Name,
  Date,
  NdWrapper,
  InmWrapper,
  InmiWrapper,
  Iwrapper,
  InWrapper,
  DivideLine,
  Navi,
  Navi2,
  NaveWrapper,
  ListPage,
  Retouch,
  LineWrapper,
  Straight,
  CommentBox,
  MaindWrapper,
<<<<<<< Updated upstream
  CommentWrapper,
  WritherBox,
  PasswordBox,
  BottomWrapper,
  ContentView,
  ContentWrite,
  TextComment,
  ContentWrapper,
  CommentFullWrapper,
  Star,
  StarWrapper,
=======
  Imageview,
  ImagelistWrapper,
  TitleWrapper,
>>>>>>> Stashed changes
} from './BoardPage.style';

export default function BoardPageUI({
  data,
  handleMoveListPage,
  handleMoveUpdate,
  handleLike,
  handleDislike,
  handleChangeInput,
}) {
<<<<<<< Updated upstream
  //   console.log(data?.fetchBoard?.writer,"asdhasjkdhasjkdhjk")
  return (
    <MaindWrapper>
      <Container>
        <MainWrapper>
          <NaveWrapper>
            <Navi>
              서울특별시 영등포구 양산로 200
              <Navi2>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</Navi2>
            </Navi>
          </NaveWrapper>
          <InmiWrapper>
            <InmWrapper>
              <InWrapper>
                <Image src="/profileImg.png"></Image>
                <NdWrapper>
                  <Name>{data?.fetchBoard?.writer}</Name>
                  <Date>
                    {!data ? <></> : data.fetchBoard?.createdAt.slice(0, 10)}
                  </Date>
                </NdWrapper>
              </InWrapper>
              <Iwrapper>
                <Image src="/link.png"></Image>
                <Image src="/nav.png"></Image>
              </Iwrapper>
            </InmWrapper>
          </InmiWrapper>
          <DivideLine></DivideLine>
          <SecondWrarper>
            <Title>{!data ? <></> : data?.fetchBoard?.title}</Title>
            <Image src="/MainImage.png"></Image>
            <Content>{!data ? <></> : data?.fetchBoard?.contents}</Content>
          </SecondWrarper>
          <ThirdWarrper>
            <Video src="/video.png"></Video>
          </ThirdWarrper>
          <FfWrapper>
            <Fourth>
              <Image onClick={handleLike} src="/Like.png"></Image>
              <Box>{data?.fetchBoard?.likeCount}</Box>
            </Fourth>
            <FourWrapper>
              <Image onClick={handleDislike} src="/dislike.png"></Image>
              <Disbox>{data?.fetchBoard?.dislikeCount}</Disbox>
            </FourWrapper>
          </FfWrapper>
        </MainWrapper>
      </Container>
=======
  console.log(data?.fetchBoard.images, 'asdhaasdasdsjkdhasjkdhjk');
  return (
    <MaindWrapper>
      {/* <Container> */}
      <MainWrapper>
        <NaveWrapper>
          <Navi>
            서울특별시 영등포구 양산로 200
            <Navi2>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</Navi2>
          </Navi>
        </NaveWrapper>
        {/* <InmiWrapper> */}
        <InmWrapper>
          <InWrapper>
            <Image src="/profileImg.png"></Image>
            <NdWrapper>
              <Name>{data?.fetchBoard?.writer}</Name>
              <Date>
                {!data ? <></> : data.fetchBoard?.createdAt.slice(0, 10)}
              </Date>
            </NdWrapper>
          </InWrapper>
          <Iwrapper>
            <Image style={{width: 27, height: 24}} src="/link.png"></Image>
            <Image style={{width: 19, height: 27}} src="/nav.png"></Image>
          </Iwrapper>
        </InmWrapper>
        {/* </InmiWrapper> */}
        <DivideLine></DivideLine>
        <SecondWrarper>
          <TitleWrapper>
            <Title>{!data ? <></> : data?.fetchBoard?.title}</Title>
          </TitleWrapper>
          {data?.fetchBoard.images?.length !== 0 && (
            <ImagelistWrapper>
              {data?.fetchBoard.images.map((data) => (
                <Imageview src={data}></Imageview>
              ))}
            </ImagelistWrapper>
          )}
          <Content>{!data ? <></> : data?.fetchBoard?.contents}</Content>
        </SecondWrarper>
        <ThirdWarrper>
          <Video src="/video.png"></Video>
        </ThirdWarrper>
        <FfWrapper>
          <Fourth>
            <Image onClick={handleLike} src="/Like.png"></Image>
            <Box>{data?.fetchBoard?.likeCount}</Box>
          </Fourth>
          <FourWrapper>
            <Image onClick={handleDislike} src="/dislike.png"></Image>
            <Disbox>{data?.fetchBoard?.dislikeCount}</Disbox>
          </FourWrapper>
        </FfWrapper>
      </MainWrapper>
      {/* </Container> */}
>>>>>>> Stashed changes
      <LineWrapper>
        <ListPage onClick={handleMoveListPage}>목록으로</ListPage>
        <Retouch onClick={handleMoveUpdate}>수정하기</Retouch>
      </LineWrapper>
      <Straight></Straight>
      {/* <CommentWrapper>
                <Image src="/Comment.png"></Image>
                <CommentBox>댓글</CommentBox>

            </CommentWrapper>
            <BottomWrapper>
                <WritherBox type = "textbox" placeholder = "작성자"></WritherBox>
                <PasswordBox type = "password" placeholder = "비밀번호"></PasswordBox>
                <StarWrapper>
                    <Star src="/Star.png"></Star>
                    <Star src="/Star.png"></Star>
                    <Star src="/Star.png"></Star>
                    <Star src="/Star.png"></Star>
                    <Star src="/Star.png"></Star>
                </StarWrapper>
            </BottomWrapper>
            <CommentFullWrapper>
                <ContentView placeholder = "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></ContentView>
                <ContentWrapper>
                    <ContentWrite placeholder = "0/100"></ContentWrite>
                    <TextComment>등록하기</TextComment>
                </ContentWrapper>
            </CommentFullWrapper> */}
    </MaindWrapper>
  );
}
