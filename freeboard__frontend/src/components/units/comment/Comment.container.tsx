import CommentUI from './Comment.presenter';
import {
    FETCH_BOARD,
    CREATE_BOARDCOMMENT,
    FETCH_BOARDCOMMENTS,
    UPDATE_COMMENTBOARD,
} from './Comment.queries';
import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {
    Mutation,
    MutationCreateBoardCommentArgs,
    Query,
    QueryFetchBoardCommentsArgs,
} from '../../../commons/types/generated/types';

export default function BoardPage() {
    const router = useRouter();

    const [createBoardComment] =
        useMutation<Mutation, MutationCreateBoardCommentArgs>(
            CREATE_BOARDCOMMENT
        );
    const [updateCommentBoard] = useMutation(UPDATE_COMMENTBOARD);
    const [currentPage, setCurrentPage] = useState(0);
    const {
        data: comment,
        refetch,
        fetchMore,
    } = useQuery(FETCH_BOARDCOMMENTS, {
        variables: {
            boardId: String(router.query.id),
            page: currentPage,
        },
    });

    const [input, setInput] = useState({
        writer: '',
        password: '',
        contents: '',
        rating: '',
    });

    const [rating, setRating] = useState(0);

    const handleClickRating = (event) => {
        setRating(Number(event.target.id));
    };

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id},
    });

    const handleChangeInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        // console.log(print);
    };

    const handleClickCreateBoardComment = async () => {
        try {
            const result = await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: input.writer,
                        password: input.password,
                        rating: rating,
                        contents: input.contents,
                    },
                    boardId: String(router.query.id),
                },
            });
            setInput({
                writer: '',
                password: '',
                contents: '',
                rating: '',
            });
            refetch();
        } catch (error) {
            alert(error.message);
        }
    };

    const onLoadMore = () => {
        if (comment?.fetchBoardComments.length % 10 !== 0) return;
        fetchMore({
            variables: {
                page: Math.floor(comment?.fetchBoardComments.length / 10) + 1,
            },
            updateQuery: (prev, {fetchMoreResult}) => ({
                fetchBoardComments: [
                    ...prev.fetchBoardComments,
                    ...fetchMoreResult.fetchBoardComments,
                ],
            }),
        });
    };

    return (
        <>
            <CommentUI
                data={data}
                handleChangeInput={handleChangeInput}
                handleClickCreateBoardComment={handleClickCreateBoardComment}
                refetch={refetch}
                comment={comment}
                input={input}
                rating={rating}
                handleClickRating={handleClickRating}
                onLoadMore={onLoadMore}
            ></CommentUI>
        </>
    );
}
