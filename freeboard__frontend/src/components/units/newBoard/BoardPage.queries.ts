import {gql} from '@apollo/client';

export const CREATE__BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            title
            writer
            _id
            images
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

export const UPDATE__BOARD = gql`
    mutation updateboard(
        $updateBoardInput: UpdateBoardInput!
        $password: String
        $boardId: ID!
    ) {
        updateBoard(
            updateBoardInput: $updateBoardInput
            password: $password
            boardId: $boardId
        ) {
            writer
            title
            contents
            _id
            youtubeUrl
            likeCount
            dislikeCount
            updatedAt
        }
    }
`;

export const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;
