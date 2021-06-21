import {gql} from '@apollo/client';

export const CREATE_BOARDCOMMENT = gql`
    mutation createBoardComment(
        $createBoardCommentInput: CreateBoardCommentInput!
        $boardId: ID!
    ) {
        createBoardComment(
            createBoardCommentInput: $createBoardCommentInput
            boardId: $boardId
        ) {
            _id
            writer
            rating
            createdAt
            contents
        }
    }
`;

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export const FETCH_BOARDCOMMENTS = gql`
    query fetchBoardComments($boardId: ID!, $page: Int) {
        fetchBoardComments(boardId: $boardId, page: $page) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`;

export const UPDATE_COMMENTBOARD = gql`
    mutation updateBoardComment(
        $updateBoardCommentInput: UpdateBoardCommentInput!
        $boardCommentId: ID!
        $password: String
    ) {
        updateBoardComment(
            updateBoardCommentInput: $updateBoardCommentInput
            boardCommentId: $boardCommentId
            password: $password
        ) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`;

export const DELETE_COMMENTBOARD = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;
