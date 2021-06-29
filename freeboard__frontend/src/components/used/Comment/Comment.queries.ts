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

export const UPDATE_USEDITEM_QUESTION = gql`
    mutation updateUseditemQuestion(
        $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
        $useditemQuestionId: ID!
    ) {
        updateUseditemQuestion(
            updateUseditemQuestionInput: $updateUseditemQuestionInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents
            user {
                _id
                email
                name
            }
            createdAt
        }
    }
`;

export const DELETE_USEDITEM_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
        deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
    }
`;

export const CREATE_USEDITEM_QUESTIONANSWER = gql`
    mutation createUseditemQuestionAnswer(
        $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
        $useditemQuestionId: ID!
    ) {
        createUseditemQuestionAnswer(
            createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents
            useditemQuestion
            user {
                _id
            }
        }
    }
`;
