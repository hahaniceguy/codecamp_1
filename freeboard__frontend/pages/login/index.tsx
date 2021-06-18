<<<<<<< Updated upstream
import {gql, useMutation} from '@apollo/client';
import {isTargetLikeServerless} from 'next/dist/next-server/server/config';
import {Router, useRouter} from 'next/router';
import {useContext, useState} from 'react';
import {GlobalContext} from '../_app';

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();

  const {setAccessToken} = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const {data} = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(data?.loginUserExample.accessToken);
      router.push('/tokentest/tokentest2');
      // console.log(data?.loginUserExample.accessToken)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호 :{' '}
      <input type="password" autoComplete="on" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
};

export default LoginPage;
=======
import LoginPage from '../../src/components/used/login/UsedLogin.container';

export default function loginPageUI() {
  return <LoginPage></LoginPage>;
}
>>>>>>> Stashed changes
