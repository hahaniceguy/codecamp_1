import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import {createContext, useState} from 'react';
import LayoutHeaderUI from '../../commons/header/LayoutHeader.container';
import HeaderLoginUI from '../../commons/header/loginPage/HeaderLogin.container';
import LayoutFooterUI from '../../commons/footer/LayoutFooter.container';
import LayoutNavigation from '../../commons/layout/navigation/LayoutNavigation.container';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
                <HeaderLoginUI />
                <LayoutHeaderUI />
                <Body>{children}</Body>
                <LayoutFooterUI />
                {/* {isNavigation && <LayoutNavigation />} */}
            </Wrapper>
        </LayoutContext.Provider>
    );
};
export default Layout;
