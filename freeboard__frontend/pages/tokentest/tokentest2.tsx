import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../_app';

//* 회원만 볼 수 있는 페이지
const TokenTest2Page = () => {
    const {data} = useQuery(FETCH_USEDITEMS);

    const onClickMove = () => {
        router.push('/tokentest/tokentest1');
    };

    return <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>;
};

export default withAuth(TokenTest2Page);
