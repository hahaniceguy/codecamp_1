import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: Sting!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
