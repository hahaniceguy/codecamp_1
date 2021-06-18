import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import {createContext, useState} from 'react';
<<<<<<< Updated upstream
import LayoutFooter from '../../commons/layout/footer/LayoutFooter.container';
import LayoutHeader from '../../commons/layout/header/LayoutHeader.container';
=======
import LayoutHeaderUI from '../../commons/header/LayoutHeader.container';
import HeaderLoginUI from '../../commons/header/loginPage/HeaderLogin.container';
import LayoutFooterUI from '../../commons/footer/LayoutFooter.container';
>>>>>>> Stashed changes
import LayoutNavigation from '../../commons/layout/navigation/LayoutNavigation.container';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
<<<<<<< Updated upstream
  z-index: 99;
=======
  display: flex;
  justify-content: center;
>>>>>>> Stashed changes
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
<<<<<<< Updated upstream
  height: 100%;
=======
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
>>>>>>> Stashed changes
  /* padding-left : 50px;
    padding-right : 50px; */
`;

const withoutNavigation = ['/board', '/query'];

export const LayoutContext = createContext({
  test: '',
});

const Layout = ({children}) => {
  const router = useRouter();
  const isNavigation = !withoutNavigation.includes(router.pathname);

  const [test, setTest] = useState('이것은 테스트입니다.');

  const value = {
    test,
  };

  return (
    <LayoutContext.Provider value={value}>
      <Wrapper>
<<<<<<< Updated upstream
        <LayoutHeader />
        {/* {isNavigation && <LayoutNavigation />} */}
        <Body></Body>
        <LayoutFooter />
=======
        <HeaderLoginUI />
        <LayoutHeaderUI />
        <Body>{children}</Body>
        <LayoutFooterUI />
        {/* {isNavigation && <LayoutNavigation />} */}
>>>>>>> Stashed changes
      </Wrapper>
    </LayoutContext.Provider>
  );
};
<<<<<<< Updated upstream
=======
export default Layout;
>>>>>>> Stashed changes
