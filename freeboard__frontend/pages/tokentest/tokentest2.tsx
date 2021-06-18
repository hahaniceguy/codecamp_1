<<<<<<< Updated upstream
=======
import {useQuery} from '@apollo/client';
>>>>>>> Stashed changes
import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../_app';

//* 회원만 볼 수 있는 페이지
const TokenTest2Page = () => {
<<<<<<< Updated upstream
  const router = useRouter();
  const {accessToken} = useContext(GlobalContext);

  //* 권한 체크
  useEffect(() => {
    if (!accessToken) router.push('/login');
  }, []);

  const onClickMove = () => {
    router.push('/tokentest/tokentest1');
  };

  if (!accessToken) return <></>;

  return <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>;
};

export default TokenTest2Page;
=======
  const {data} = useQuery(FETCH_USEDITEMS);

  const onClickMove = () => {
    router.push('/tokentest/tokentest1');
  };

  return <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>;
};

export default withAuth(TokenTest2Page);
>>>>>>> Stashed changes
