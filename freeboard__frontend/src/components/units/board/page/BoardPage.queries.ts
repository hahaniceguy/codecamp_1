import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;
