import {
  Wrapper,
  Title,
  ProfileImg,
  ProfileName,
  PigImg,
  MoneyCount,
  CartImg,
  MyMarket,
  BlackPigImg,
  MyPointCount,
  MyProfileImg,
  MyProfileBox,
  MyProfileWrapper,
  MyItem,
  MyCheck,
  Noname,
  DivideLine,
  Number,
  ItemTitle,
  ItemSalePrice,
  Writer,
  Date,
  LineBreaker,
  ListWrapper,
  ListTopWrapper,
  ListMainWrapper,
  MoneyCountWrapper,
  MyMarketWrapper,
  MyPointCountWrapper,
  MyProfileBoxWrapper,
} from './MyPage.style';

export default function MyPageUI() {
  return (
    <Wrapper>
      <MyProfileWrapper>
        <Title>MYPAGE</Title>
        <ProfileImg src="/profileImg.png"></ProfileImg>
        <ProfileName>노원두</ProfileName>
        <MoneyCountWrapper>
          <PigImg src="/Pig.png"></PigImg>
          <MoneyCount>100,000</MoneyCount>
        </MoneyCountWrapper>
        <MyMarketWrapper>
          <CartImg src="/Cart.png"></CartImg>
          <MyMarket>내 장터</MyMarket>
        </MyMarketWrapper>
        <MyPointCountWrapper>
          <BlackPigImg src="/BlackPig.png"></BlackPigImg>
          <MyPointCount>내 포인트</MyPointCount>
        </MyPointCountWrapper>
        <MyProfileBoxWrapper>
          <MyProfileImg src="/profileImg.png"></MyProfileImg>
          <MyProfileBox>내 프로필</MyProfileBox>
        </MyProfileBoxWrapper>
      </MyProfileWrapper>
      <LineBreaker></LineBreaker>
      <ListWrapper>
        <ListTopWrapper>
          <MyItem>나의상품</MyItem>
          <Noname>|</Noname>
          <MyCheck>마이찜</MyCheck>
        </ListTopWrapper>
        <DivideLine></DivideLine>
        <ListMainWrapper>
          <Number>번호</Number>
          <ItemTitle>제목</ItemTitle>
          <ItemSalePrice>판매가격</ItemSalePrice>
          <Writer>작성자</Writer>
          <Date>날짜</Date>
        </ListMainWrapper>
      </ListWrapper>
    </Wrapper>
  );
}
