import {
  TopWrapper,
  LogoImg,
  TopRightWrapper,
  LoginBox,
  SignUp,
  Wrapper,
} from './HeaderLogin.styles';
import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import LoginPageUI from '../../../components/used/login/UsedLogin.container';
import SignUpUI from '../../../components/used/singup/UsedSignup.container';

const LayoutUI = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [signupMadalVisible, setSignupMadalBisible] = useState(false);

  const showModal = (e) => {
    setIsModalVisible(true);
  };

  const showModalsingup = () => {
    setSignupMadalBisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSignupMadalBisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSignupMadalBisible(false);
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
          <LoginPageUI isModalVisible={isModalVisible} onclick={handleClick} />
          <SignUp onClick={showModalsingup}>회원가입</SignUp>
          <SignUpUI
            signupMadalVisible={signupMadalVisible}
            onclick={handleSignupClick}
          />
        </TopRightWrapper>
      </TopWrapper>
    </Wrapper>
  );
};

export default LayoutUI;
