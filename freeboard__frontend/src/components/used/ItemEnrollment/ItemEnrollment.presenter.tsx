import {
  Wrapper,
  ItemTitle,
  ItemName,
  ItemNameBox,
  OnePoint,
  OnePointWrapper,
  ItemExplanation,
  ItemExplanationBox,
  SellCount,
  SellCountBox,
  Tag,
  TagBox,
  TradeNavi,
  Map,
  Address,
  AddressBox,
  AddressBox2,
  Picture,
  PictureImg,
  XImg,
  ImgBox,
  Plus,
  MainPicture,
  RadioButton,
  ButtonName,
  Enrollment,
  AddressWrapper,
  TradeNaviWrapper,
  TradeMapWrapper,
  PictureWrapper,
  ButtonWrapper,
  MiniWrapper,
} from './ItemEnrollment.styles';

export default function ItemEnrollemntUI() {
  return (
    <Wrapper>
      <ItemTitle>상품 등록하기</ItemTitle>
      <MiniWrapper>
        <ItemName>상품명</ItemName>
        <ItemNameBox placeholder="상품명을 작성해주세요."></ItemNameBox>
        <OnePoint>한줄요약</OnePoint>
        <OnePointWrapper placeholder="상품명을 작성해주세요."></OnePointWrapper>
        <ItemExplanation>상품설명</ItemExplanation>
        <ItemExplanationBox placeholder="상품을 설명해주세요."></ItemExplanationBox>
        <SellCount>판매가격</SellCount>
        <SellCountBox placeholder="판매 가격을 입력해주세요."></SellCountBox>
        <Tag>태그입력</Tag>
        <TagBox placeholder="#태그 #태그 #태그"></TagBox>
        <TradeNaviWrapper>
          <TradeMapWrapper>
            <TradeNavi>거래위치</TradeNavi>
            <Map src="/map.png"></Map>
          </TradeMapWrapper>
          <AddressWrapper>
            <Address>주소</Address>
            <AddressBox></AddressBox>
            <AddressBox2></AddressBox2>
          </AddressWrapper>
        </TradeNaviWrapper>
        <Picture>사진 첨부</Picture>
        <PictureWrapper>
          <PictureImg src="/galt2.png"></PictureImg>
          <XImg src="/X.png"></XImg>
          <ImgBox>
            <Plus>
              +<br /> Upload
            </Plus>
          </ImgBox>
        </PictureWrapper>
        <MainPicture>메인 사진 설정</MainPicture>
        <ButtonWrapper>
          <RadioButton type="radio"></RadioButton>
          <ButtonName>사진 1</ButtonName>
          <RadioButton type="radio"></RadioButton>
          <ButtonName>사진 2</ButtonName>
        </ButtonWrapper>
      </MiniWrapper>
      <Enrollment>등록하기</Enrollment>
    </Wrapper>
  );
}
