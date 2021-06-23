import {
    TopWrapper,
    LogoImg,
    TopRightWrapper,
    LoginBox,
    SignUp,
    Wrapper,
} from './HeaderLogin.styles';
import React, {useState, useContext} from 'react';
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import LoginPageUI from '../../../components/used/login/UsedLogin.container';
import SignUpUI from '../../../components/used/singup/UsedSignup.container';
import {GlobalContext} from '../../../../pages/_app';

const LayoutUI = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [signupModalVisible, setSignupModalBisible] = useState(false);

    const {setLoginVisible, loginVisible} = useContext(GlobalContext);

    const showModal = (e) => {
        setLoginVisible(true);
    };

    const showModalsingup = () => {
        setSignupModalBisible(true);
    };

    const handleOk = () => {
        setLoginVisible(false);
        setSignupModalBisible(false);
    };

    const handleCancel = () => {
        setLoginVisible(false);
        setSignupModalBisible(false);
    };

    const handleClick = () => {
        handleCancel();
        handleOk();
    };

    const handleSignupClick = () => {
        handleCancel();
        handleOk();
    };

    return (
        <Wrapper>
            <TopWrapper>
                <LogoImg src="/logo.png"></LogoImg>
                <TopRightWrapper>
                    <LoginBox onClick={showModal}>로그인</LoginBox>
                    <LoginPageUI
                        loginVisible={loginVisible}
                        onclick={handleClick}
                    />
                    <SignUp onClick={showModalsingup}>회원가입</SignUp>
                    <SignUpUI
                        signupModalVisible={signupModalVisible}
                        onclick={handleSignupClick}
                    />
                </TopRightWrapper>
            </TopWrapper>
        </Wrapper>
    );
};

export default LayoutUI;
