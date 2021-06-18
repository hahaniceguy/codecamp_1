import styled from '@emotion/styled';

export const RegisterButton = styled.button`
  background-color: ${({aaa}: {aaa: boolean}) =>
    aaa === true ? 'blue' : 'yellow'};
`;
