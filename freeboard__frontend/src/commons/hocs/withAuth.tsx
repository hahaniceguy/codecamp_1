import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../../../pages/_app';
import getAccessToken from '../libraries/getAccessToken';

const withAuth = (Component) => (props) => {
    const router = useRouter();
    const {accessToken, setAccessToken} = useContext(GlobalContext);

    //*토큰체크
    useEffect(() => {
        if (!accessToken) return;

        const restoreAccessToken = async () => {
            const newAccessToken = await getAccessToken(setAccessToken);
            if (!newAccessToken) router.push(`/login`);
        };
        restoreAccessToken();
        //* refreshToken으로 accessToken을 재발급 받기
        //* 그래도 accessToken이 없으면 로그인 화면으로 돌려보내기
        //* router.push('/login');
    }, []);
    if (!accessToken) return <></>;

    return <Component {...props} />; //*컴포넌트 리턴
};

export default withAuth;

// const withAuth = () => {

// }

// export default withAuth
