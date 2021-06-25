import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import CommentUI from './Comment.presenter';
import {
    CREATE_USEDITEM_QUESTION,
    DELETE_USEDITEM_QUESTION,
    FETCH_USEDITEM_QUESTION,
    UPDATE_USEDITEM_QUESTION,
} from './Comment.queries';

export default function Comment() {
    const router = useRouter();
    const useditemId = router.query.id;
    const [page, setPage] = useState(1);
    const [isEdit, setIsEdit] = useState(null);
    const contentRef = useRef<HTMLTextAreaElement>();

    const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
    const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
    const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
    const {data} = useQuery(FETCH_USEDITEM_QUESTION, {
        variables: {
            page,
            useditemId,
        },
    });

    const [contents, setcontents] = useState('');

    const handeChangeInput = (e) => {
        setcontents(e.target.value);
    };

    const handleUpdateComment = async () => {
        console.log();
        try {
            const result = await updateUseditemQuestion({
                variables: {
                    updateUseditemQuestionInput: {
                        contents,
                    },
                    useditemQuestionId: isEdit._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_USEDITEM_QUESTION,
                        variables: {
                            page,
                            useditemId,
                        },
                    },
                ],
            });

            // window.setTimeout(() => {
            setIsEdit(null);
            // }, 300);
        } catch (error) {
            alert(error.message);
        }
    };

    const writeQuestion = () => {
        try {
            createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput: {
                        contents,
                    },
                    useditemId,
                },

                refetchQueries: [
                    {
                        query: FETCH_USEDITEM_QUESTION,
                        variables: {
                            page,
                            useditemId,
                        },
                    },
                ],
            });

            alert('등록 완료');
            contentRef.current.value = '';
        } catch (error) {
            alert(error.message);
        }
    };

    const ModifyQuestion = (qustionData) => {
        setIsEdit(qustionData);
    };

    const handleDeleteComment = async (useditemQuestionId) => {
        try {
            await deleteUseditemQuestion({
                variables: {
                    useditemQuestionId,
                },
                refetchQueries: [
                    {
                        query: FETCH_USEDITEM_QUESTION,
                        variables: {
                            page,
                            useditemId,
                        },
                    },
                ],
            });
            alert('삭제 되었습니다.');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <CommentUI
            handeChangeInput={handeChangeInput}
            writeQuestion={writeQuestion}
            data={data}
            contentRef={contentRef}
            ModifyQuestion={ModifyQuestion}
            isEdit={isEdit}
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
        ></CommentUI>
    );
}
