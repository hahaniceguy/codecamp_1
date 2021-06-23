import {
    Wrapper,
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
    ItemWrapper,
} from './BestItem.style';

export default function BestItemUI({data, handleClick}) {
    return (
        <>
            <BestItem>베스트 상품</BestItem>
            <Wrapper>
                {data?.fetchUseditemsOfTheBest.map((data) => (
                    <ItemWrapper key={data._id}>
                        <ViewImg src="/gtap.png"></ViewImg>
                        <ExplanationWrapper>
                            <ItemName id={data._id} onClick={handleClick}>
                                {data.name}
                            </ItemName>
                            <OneLineExplanation onClick={handleClick}>
                                {data.remarks}
                            </OneLineExplanation>
                        </ExplanationWrapper>
                        <PriceWrapper>
                            <Price onClick={handleClick}>{data.price}</Price>
                            <LikeWrapper>
                                <HeartImg src="/Heart.png"></HeartImg>
                                <Like>20</Like>
                            </LikeWrapper>
                        </PriceWrapper>
                    </ItemWrapper>
                ))}
            </Wrapper>
        </>
    );
}
