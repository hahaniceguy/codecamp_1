import {
  Container,
  Codeimg,
  Loginemail,
  LoginPassword,
  LoginCheckimg,
  LoginCheckcheck,
  LoginCheckWrapper,
  LoginButton,
  DivideLine,
  EmailFind,
  PasswordFind,
  SignUp,
  VerticalLine,
  BottomWrapper,
  Container2,
  LoginCheckBox,
  LoginPasswordCheckBox,
  LoginBoxWrapper,
} from './UsedLogin.style';
import React, {useEffect, useState} from 'react';
import {Modal} from 'antd';
import {schema} from './UserLogin.validation';

const inputsInit = {
  email: '',
  password: '',
};

export default function LoginPageUI({onclick, handleInput, input}) {
  const [inputs, setInputs] = useState(inputsInit);
  const [errors, setErrors] = useState({
    email: '이메일은 필수 입력입니다.',
    password: '비밀번호는 필수 입력입니다.',
  });

  const onChangeInput = async (event) => {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    await schema
      .validate(newInputs, {abortEarly: false})
      .then(() => setErrors({...inputsInit}))
      .catch((error) => {
        const newErrors = {...inputsInit};
        error.errors.forEach((message) => {
          newErrors[message.split(':')[0]] = message.split(':')[1];
        });
        setErrors(newErrors);
      });
  };

  const onClickLogin = () => {
    if (Object.values(errors).join('') !== '') {
      alert('입력 정보가 올바르지 않습니다.');
      return;
    }

    // 로그인하기
  };

  return (
    <Modal
      visible={true}
      onOk={onclick}
      onCancel={onclick}
      footer=""
      bodyStyle={{margin: 0, padding: 0}}
    >
      <Container />
      <Container2>
        <Codeimg src="/whitelogo.png"></Codeimg>
        <LoginBoxWrapper>
          <Loginemail
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={onChangeInput}
          ></Loginemail>
          <LoginCheckBox>{errors.email}</LoginCheckBox>
          <LoginPassword
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeInput}
          ></LoginPassword>
          <LoginCheckBox>{errors.password}</LoginCheckBox>
        </LoginBoxWrapper>
        <LoginCheckWrapper>
          <LoginCheckimg src="/loginon.png"></LoginCheckimg>
          <LoginCheckcheck>로그인 상태 유지</LoginCheckcheck>
        </LoginCheckWrapper>
        <LoginButton type="button">로그인하기</LoginButton>
        <DivideLine></DivideLine>
        <BottomWrapper>
          <EmailFind>이메일 찾기</EmailFind>
          <VerticalLine>|</VerticalLine>
          <PasswordFind>비민번호 찾기</PasswordFind>
          <VerticalLine>|</VerticalLine>
          <SignUp>회원가입</SignUp>
        </BottomWrapper>
      </Container2>
    </Modal>
  );
}
