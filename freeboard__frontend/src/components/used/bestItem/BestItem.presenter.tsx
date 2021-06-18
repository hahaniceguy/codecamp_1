import {
  Test,
  BestItem,
  ViewImg,
  ItemName,
  OneLineExplanation,
  Price,
  HeartImg,
  Like,
  LikeWrapper,
  PriceWrapper,
  ExplanationWrapper,
} from './BestItem.style';

export default function BestItemUI() {
  return (
    <Test>
      <BestItem>베스트 상품</BestItem>
      <ViewImg src="/gtap.png"></ViewImg>
      <ExplanationWrapper>
        <ItemName>삼성전자 갤러시탭A 10.1</ItemName>
        <OneLineExplanation>2019 LTE 32GB</OneLineExplanation>
      </ExplanationWrapper>
      <PriceWrapper>
        <Price>240,120원</Price>
        <LikeWrapper>
          <HeartImg src="/Heart.png"></HeartImg>
          <Like>20</Like>
        </LikeWrapper>
      </PriceWrapper>
    </Test>
  );
}
