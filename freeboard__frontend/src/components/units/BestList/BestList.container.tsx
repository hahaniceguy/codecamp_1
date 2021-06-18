import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import BestListUI from './BestList.presenter';
import {FETCH_BEST} from './BestList.queries';

export default function BestListPage() {
  const router = useRouter();
  const {data} = useQuery(FETCH_BEST);
  console.log(data);

  const handleClick = (event) => {
    router.push(`/board/${event.target.id}`);
  };

  return <BestListUI data={data} handleClick={handleClick}></BestListUI>;
}
