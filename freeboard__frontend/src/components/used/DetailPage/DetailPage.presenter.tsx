import {
  Wrapper,
  Address,
  ProfileImg,
  SaleMan,
  Date,
  LinkImg,
  Navi,
  DivideLine,
  SaleDateWrapper,
  ProfileWrapper,
  NaviWrapper,
  ImgWrapper,
  OneLineExplanation,
  SaleName,
  HeartImg,
  LikeCount,
  MoneyCount,
  SaleWrapper,
  LikeWrapper,
  SaleLikeWrapper,
  ItemImg,
  ItemSmallImg,
  ItemSmallImgWrapper,
  Contents,
  Tag,
  Map,
  ListPage,
  Purchase,
  ButtonWrapper,
} from './DetailPage.styles';

export default function DetailPageUI() {
  return (
    <Wrapper>
      <Address>
        서울특별시 영등포구 양산로 200
        <br />
        (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
      </Address>
      <NaviWrapper>
        <ProfileWrapper>
          <ProfileImg src="/profileImg.png"></ProfileImg>
          <SaleDateWrapper>
            <SaleMan>판매자</SaleMan>
            <Date>Date: 2021. 02. 18</Date>
          </SaleDateWrapper>
        </ProfileWrapper>
        <ImgWrapper>
          <LinkImg src="/link.png"></LinkImg>
          <Navi src="/nav.png"></Navi>
        </ImgWrapper>
      </NaviWrapper>
      <DivideLine></DivideLine>
      <SaleLikeWrapper>
        <SaleWrapper>
          <OneLineExplanation>2019 LTE 32GB</OneLineExplanation>
          <SaleName>삼성전자 갤럭시탭A 10.1</SaleName>
        </SaleWrapper>
        <LikeWrapper>
          <HeartImg src="/Heart.png"></HeartImg>
          <LikeCount>20</LikeCount>
        </LikeWrapper>
      </SaleLikeWrapper>
      <MoneyCount>240,120원</MoneyCount>
      <ItemImg src="/gtap.png"></ItemImg>
      <ItemSmallImgWrapper>
        <ItemSmallImg style={{paddingRight: 24}} src="/gtap.png"></ItemSmallImg>
        <ItemSmallImg
          style={{paddingRight: 24}}
          src="/galt2.png"
        ></ItemSmallImg>
        <ItemSmallImg
          style={{paddingRight: 24}}
          src="/galt3.png"
        ></ItemSmallImg>
        <ItemSmallImg src="/galt4.png"></ItemSmallImg>
      </ItemSmallImgWrapper>
      <Contents>contents부분</Contents>
      <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
      <DivideLine></DivideLine>
      <Map src="/map.png"></Map>
      <DivideLine></DivideLine>
      <ButtonWrapper>
        <ListPage>목록으로</ListPage>
        <Purchase>구매하기</Purchase>
      </ButtonWrapper>
    </Wrapper>
  );
}
