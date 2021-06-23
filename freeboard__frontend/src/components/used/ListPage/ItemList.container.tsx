import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {
    Query,
    QueryFetchUseditemArgs,
} from '../../../commons/types/generated/types';
import ItemListUI from './ItemList.presenter';
import {FETCH_USED_ITEMS} from './ItemList.queries';
import BestItemUI from '../bestItem/BestItem.container';

export default function Itemlist() {
    const router = useRouter();

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);

    const {data, fetchMore} = useQuery(FETCH_USED_ITEMS, {
        variables: {
            search: search,
            page: page,
        },
    });
    console.log(data, 'datadata');

    const handleCreateItem = () => {
        router.push(`/ItemEnrollment`);
    };

    const handleClickItem = (e) => {
        router.push(`/detail/${e.target.id}`);
    };

    const onLoadMore = () => {
        if (data?.fetchUseditems.length % 10 !== 0) return;
        fetchMore({
            variables: {
                page: Math.floor(data?.fetchUseditems.length / 10) + 1,
            },
            updateQuery: (prev, {fetchMoreResult}) => ({
                fetchUseditems: [
                    ...prev.fetchUseditems,
                    ...fetchMoreResult.fetchUseditems,
                ],
            }),
        });
    };
    console.log(data?.fetchUseditems.length % 5, 'data');

    return (
        <>
            <BestItemUI />
            <ItemListUI
                data={data}
                handleCreateItem={handleCreateItem}
                onLoadMore={onLoadMore}
                handleClickItem={handleClickItem}
            />
        </>
    );
}
