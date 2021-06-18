import {Body, Footer, Header, Wrapper, HeaderImg, HeaderLineWrapper, LogoImg, LoginBox, SignUp, TopRightWrapper, TopWrapper} from "./Layout.styles"

const LayoutUI = ({ children}) => {
    return(
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
            <Body>{children}</Body>
            <Footer></Footer>
        </Wrapper>
    )
}

export default LayoutUI;  