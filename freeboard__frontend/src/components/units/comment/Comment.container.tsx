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
<<<<<<< Updated upstream
=======
import {
  Mutation,
  MutationCreateBoardCommentArgs,
  Query,
  QueryFetchBoardCommentsArgs,
} from '../../../commons/types/generated/types';
>>>>>>> Stashed changes

export default function BoardPage() {
  const router = useRouter();

<<<<<<< Updated upstream
  const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT);
  const [updateCommentBoard] = useMutation(UPDATE_COMMENTBOARD);

  const {data: comment, refetch} = useQuery(FETCH_BOARDCOMMENTS, {
    variables: {boardId: router.query.id},
  });

=======
  const [createBoardComment] =
    useMutation<Mutation, MutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT);
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

>>>>>>> Stashed changes
  const [input, setInput] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: '',
  });
<<<<<<< Updated upstream

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

=======

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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          boardId: router.query.id,
=======
          boardId: String(router.query.id),
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
        onLoadMore={onLoadMore}
>>>>>>> Stashed changes
      ></CommentUI>
    </>
  );
}
