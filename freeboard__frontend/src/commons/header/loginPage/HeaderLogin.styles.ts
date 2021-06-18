import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  height: 152px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 36px;
  max-width: 203px;
  width: 100%;
`;

export const TopRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-left : 20px; */
`;

export const LoginBox = styled.div`
  max-width: 60px;
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const SignUp = styled.div`
  width: 100px;
  /* width: 100%; */
  height: 44px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd600;
  border-radius: 8px;
  cursor: pointer;
`;
