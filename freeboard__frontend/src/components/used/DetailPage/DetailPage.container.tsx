import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import DetailPageUI from './DetailPage.presenter';
import {FETCH_USED_ITEM} from './DetailPage.queries';
import CommentUI from '../Comment/Comment.container';

export default function DetailPage() {
    const router = useRouter();

    const {data} = useQuery(FETCH_USED_ITEM, {
        variables: {useditemId: router.query.id},
    });
    console.log(data, 'router.query.id');

    const handleClickMoveListPage = () => {
        router.push(`/Itemlist`);
    };

    const handleClickUpdatePage = () => {
        router.push(`/detail/${data.fetchUseditem._id}/edit`);
    };
    console.log(data, 'console');

    return (
        <>
            <DetailPageUI
                data={data}
                handleClickMoveListPage={handleClickMoveListPage}
                handleClickUpdatePage={handleClickUpdatePage}
            />
            <CommentUI></CommentUI>
        </>
    );
}
