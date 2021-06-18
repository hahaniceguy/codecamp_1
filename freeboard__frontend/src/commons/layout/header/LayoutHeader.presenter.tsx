import {
  Header,
  Wrapper,
  HeaderImg,
  HeaderLineWrapper,
  LogoImg,
  LoginBox,
  SignUp,
  TopRightWrapper,
  TopWrapper,
} from './LayoutHeader.styles';

const LayoutUI = ({children}) => {
  return (
    <Wrapper>
      <TopWrapper>
        <LogoImg src="/logo.png"></LogoImg>
        <TopRightWrapper>
          <LoginBox>로그인</LoginBox>
          <SignUp>회원가입</SignUp>
        </TopRightWrapper>
      </TopWrapper>
      <Header>
        <HeaderImg src="/Header.png"></HeaderImg>
        <HeaderLineWrapper></HeaderLineWrapper>
      </Header>
    </Wrapper>
  );
};

export default LayoutUI;
