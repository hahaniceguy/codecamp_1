import BoardPageUI from './BoardPage.presenter';
import {useQuery, useMutation} from '@apollo/client';
import {FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD} from './BoardPage.queries';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Comment from '../comment/Comment.container';

export default function BoardPage() {
    const router = useRouter();

    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);

    const [input, setInput] = useState({});

    const handleChangeInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        console.log(print);
    };

    const {data, refetch} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id},
    });

    console.log(data, 'data');

    const handleMoveListPage = () => {
        router.push(`/listPage`);
    };

    const handleMoveUpdate = () => {
        router.push(`/board/${data.fetchBoard._id}/edit`);
    };

    const handleLike = async () => {
        try {
            const result = await likeBoard({
                variables: {
                    boardId: router.query.id,
                    // likeCount: input.likeCount
                },
            });
            console.log(result);
            refetch();
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDislike = async () => {
        try {
            const result = await dislikeBoard({
                variables: {
                    boardId: router.query.id,
                    // dislikeCount: input.dislikeCount
                },
            });
            console.log(result);
            refetch();
        } catch (error) {
            alert(error.message);
        }
    };

    console.log(data?.fetchBoard);

    return (
        <>
            <BoardPageUI
                data={data}
                handleMoveListPage={handleMoveListPage}
                handleMoveUpdate={handleMoveUpdate}
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleChangeInput={handleChangeInput}
            ></BoardPageUI>
            <Comment></Comment>
        </>
    );
}
