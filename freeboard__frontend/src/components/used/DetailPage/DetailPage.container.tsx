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

    return (
        <>
            <DetailPageUI data={data} />
            <CommentUI></CommentUI>
        </>
    );
}
