import {gql} from '@apollo/client';

export const CREATE_USEDITEM_QUESTION = gql`
    mutation createUseditemQuestion(
        $createUseditemQuestionInput: CreateUseditemQuestionInput!
        $useditemId: ID!
    ) {
        createUseditemQuestion(
            createUseditemQuestionInput: $createUseditemQuestionInput
            useditemId: $useditemId
        ) {
            _id
            contents
            user {
                _id
                name
            }
            createdAt
        }
    }
`;

export const FETCH_USEDITEM_QUESTION = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
            _id
            contents
            user {
                _id
                name
            }
            createdAt
        }
    }
`;
