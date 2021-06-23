import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 80px;
`;

export const ItemWrapper = styled.div`
    max-width: 282px;
    height: 400px;
    box-shadow: 2px 2px 10px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 15px;
    /* align-items: center; */
`;

export const BestItem = styled.div`
    width: 250px;
    height: 42px;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 80px;
`;

export const ViewImg = styled.img`
    width: 242px;
    height: 242px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const ItemName = styled.div`
    width: 250px;
    height: 27px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
    cursor: pointer;
`;

export const OneLineExplanation = styled.div`
    width: 100px;
    height: 18px;
    font-size: 12px;
    font-weight: 500;
`;

export const Price = styled.div`
    width: 160px;
    height: 28px;
    font-size: 18px;
    font-weight: 700;
`;

export const HeartImg = styled.img`
    width: 20px;
    height: 20px;
`;

export const Like = styled.div`
    width: 18px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
`;

export const LikeWrapper = styled.div`
    width: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const PriceWrapper = styled.div`
    width: 222px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ExplanationWrapper = styled.div`
    width: 242px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
