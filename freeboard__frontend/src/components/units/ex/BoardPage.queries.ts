import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
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
            likeCount
            dislikeCount
            images
        }
    }
`;

export const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;

export const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId: ID!) {
        dislikeBoard(boardId: $boardId)
    }
`;
