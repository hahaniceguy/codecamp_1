import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Shadow = styled.div`
  width: 1200px;
  height: 1000px;
  display: flex;
  box-shadow: 0px 0px 13px 0.1px rgba(0, 0, 0, 0.3);
  justify-content: center;
`;

export const Body = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeftWrapper = styled.div`
  width: 194px;
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderProfileImg = styled.img``;

export const HeaderWriterWrapper = styled.div`
  width: 130px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  flex-direction: column;
`;
export const HeaderWriter = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const HeaderDate = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  align-content: center;
  width: 100px;
`;
export const HeaderLinkImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const HeaderNavImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const DivideLine = styled.hr`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 160px;
`;

export const LikeBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 51px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
`;
export const LikeImg = styled.img``;
export const LikeCount = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const DisLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
`;
export const DisLikeImg = styled.img``;
export const DisLikeCount = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
