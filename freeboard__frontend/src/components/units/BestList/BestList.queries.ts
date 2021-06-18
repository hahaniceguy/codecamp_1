import {gql} from '@apollo/client';

export const FETCH_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      createdAt
      title
      likeCount
    }
  }
`;
