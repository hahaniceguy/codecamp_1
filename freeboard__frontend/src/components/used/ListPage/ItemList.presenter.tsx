import {
  SaleWrapper,
  SaleItem,
  SaleEnd,
  SearchImg,
  Searching,
  SearchWrapper,
  CalendarImg,
  Date,
  Line,
  DateWrapper,
  Search,
  SaleImg,
  ItemName,
  OneLineExplanation,
  Tag,
  ProfileImg,
  ProfileName,
  HeartIgm,
  LikeCount,
  MoneyImg,
  MoneyCount,
  ItemWrapper,
  ProfileWrapper,
  MoneyWrapper,
  ItemProfileWrapper,
  ListWrapper,
  Wrapper,
  DivideLine,
} from './ItemList.styles';

export default function ItemListUI() {
  return (
    <div>
      <SaleWrapper>
        <SaleItem>판매중상품</SaleItem>
        <SaleEnd>판매된상품</SaleEnd>
        <SearchWrapper>
          <SearchImg src="/Magni.png"></SearchImg>
          <Searching placeholder="제품을 검색해주세요."></Searching>
        </SearchWrapper>
        <DateWrapper>
          <CalendarImg style={{paddingLeft: 18}} src="/cal.png"></CalendarImg>
          <Date>2020.12.02</Date>
          <Line>~</Line>
          <CalendarImg src="/cal.png"></CalendarImg>
          <Date>2020.12.02</Date>
        </DateWrapper>
        <Search>검색</Search>
      </SaleWrapper>
      <Wrapper>
        <SaleImg src="/gtap.png"></SaleImg>
        <ListWrapper>
          <ItemProfileWrapper>
            <ItemWrapper>
              <ItemName>삼성전자 갤럭시탭A 10.1</ItemName>
              <OneLineExplanation>2019 LTE 32GB</OneLineExplanation>
              <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
            </ItemWrapper>
            <ProfileWrapper>
              <ProfileImg src="/profileImg.png"></ProfileImg>
              <ProfileName>판매자</ProfileName>
              <HeartIgm src="/Heart.png"></HeartIgm>
              <LikeCount>20</LikeCount>
            </ProfileWrapper>
          </ItemProfileWrapper>
          <MoneyWrapper>
            <MoneyImg src="/Money.png"></MoneyImg>
            <MoneyCount>240,120원</MoneyCount>
          </MoneyWrapper>
        </ListWrapper>
      </Wrapper>
      <DivideLine></DivideLine>
    </div>
  );
}
