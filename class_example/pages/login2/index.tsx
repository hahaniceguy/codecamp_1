import {gql, useApolloClient, useLazyQuery, useMutation} from '@apollo/client';
import {isTargetLikeServerless} from 'next/dist/next-server/server/config';
import {Router, useRouter} from 'next/router';
import {useContext, useState} from 'react';
import { GlobalContext } from "../_app";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
            fetchUserLoggedIn{
                email
                name
                userPoint{
                    amount
                }
            }
    }
`

const LoginPage = () => {
  const router = useRouter();
  const {setAccessToken, setUserInfo} = useContext(GlobalContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const client = useApolloClient();

//   const [fetchUserLazy, {data}] = useLazyQuery(FETCH_USER_LOGGED_IN);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async (event) => {
      event.preventDefault();
    try {
      const {data} = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(data?.loginUserExample.accessToken);
      const userInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
              Headers: {authorization: data?.loginUserExample.accessToken},
          },
      });
      setUserInfo(userInfo.data.fetchUserLoggedIn);
    //   router.push('/tokentest/tokentest2');
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
