import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import BestItemUI from './BestItem.presenter';
import {FETCH_USED_BEST} from './BestItem.queries';

export default function usedMain() {
    const router = useRouter();

    const {data} = useQuery(FETCH_USED_BEST);
    console.log(data, 'asldkf');

    const handleClick = (e) => {
        router.push(`/detail/${e.target.id}`);
    };

    return <BestItemUI data={data} handleClick={handleClick} />;
}
