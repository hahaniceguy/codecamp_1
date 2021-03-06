import {
    SingUpText,
    Email,
    Container,
    EmailTextBox,
    Name,
    NameTextBox,
    Password,
    PasswordTextBox,
    RePassword,
    RePasswordTextBox,
    SignUpButton,
    Backimg,
    TextBoxWrapper,
    EmailCheckBox,
    NameCheckBox,
    PasswordCheckBox,
    RePasswordCheckBox,
    OkModal,
    ModalXimg,
    ModalLogo,
    ModalText,
    ModalOk,
    ModalWrapper,
} from './UsedSignup.style';
import React from 'react';
import {Modal} from 'antd';

export default function SingUpUI({
    onclick,
    // handleOk,
    onClickSwitchOff,
    on,
    onChangeInput,
    errors,
    onClickSignUp,
}) {
    return (
        <Modal
            visible={true}
            onOk={onclick}
            onCancel={onclick}
            footer=""
            bodyStyle={{margin: 0, padding: 0}}
        >
            <Backimg></Backimg>
            <Container>
                <SingUpText>회원가입</SingUpText>
                <TextBoxWrapper>
                    <Email>이메일</Email>
                    <EmailTextBox
                        name="email"
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        onChange={onChangeInput}
                    ></EmailTextBox>
                    <EmailCheckBox>{errors.email}</EmailCheckBox>

                    <Name>이름</Name>
                    <NameTextBox
                        name="name"
                        type="text"
                        placeholder="이름을 입력해주세요."
                        onChange={onChangeInput}
                    ></NameTextBox>
                    <NameCheckBox>{errors.name}</NameCheckBox>
                    <Password>비밀번호</Password>
                    <PasswordTextBox
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={onChangeInput}
                    ></PasswordTextBox>
                    <PasswordCheckBox>{errors.password}</PasswordCheckBox>
                    <Password>비밀번호 확인</Password>
                    <PasswordTextBox
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호 확인을 입력해주세요."
                        onChange={onChangeInput}
                    ></PasswordTextBox>
                    <PasswordCheckBox>
                        {errors.passwordConfirm}
                    </PasswordCheckBox>
                </TextBoxWrapper>
                <SignUpButton
                    isActive={
                        errors.email === '' &&
                        errors.password === '' &&
                        errors.name === '' &&
                        errors.passwordConfirm === ''
                    }
                    onClick={onClickSignUp}
                >
                    회원가입하기
                </SignUpButton>
                {on && (
                    <OkModal>
                        <ModalXimg
                            onClick={onClickSwitchOff}
                            src="./BlackX.png"
                        ></ModalXimg>
                        <ModalWrapper>
                            <ModalLogo src="./logo.png"></ModalLogo>
                            <ModalText>회원가입을 축하합니다!</ModalText>
                            <ModalOk onClick={onClickSwitchOff}>확인</ModalOk>
                        </ModalWrapper>
                    </OkModal>
                )}
            </Container>
        </Modal>
    );
}
