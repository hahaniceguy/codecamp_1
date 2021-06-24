import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import CommentUI from './Comment.presenter';
import {
    CREATE_USEDITEM_QUESTION,
    FETCH_USEDITEM_QUESTION,
} from './Comment.queries';

export default function Comment() {
    const router = useRouter();
    const useditemId = router.query.id;
    const [page, setPage] = useState(1);
    const contentRef = useRef<HTMLTextAreaElement>();

    const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
    const {data} = useQuery(FETCH_USEDITEM_QUESTION, {
        variables: {
            page,
            useditemId,
        },
    });
    console.log(data, 'asdf');

    const [contents, setcontents] = useState('');

    const handeChangeInput = (e) => {
        setcontents(e.target.value);
    };
    console.log(contents);

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

    return (
        <CommentUI
            handeChangeInput={handeChangeInput}
            writeQuestion={writeQuestion}
            data={data}
            contentRef={contentRef}
        ></CommentUI>
    );
}
