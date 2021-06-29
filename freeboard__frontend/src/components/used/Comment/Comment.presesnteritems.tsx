import {useMutation} from '@apollo/client';
import {useEffect, useState} from 'react';
import {UPDATE_USEDITEM_QUESTION} from './Comment.queries';
import {
    UpdateWrapper,
    UpdateBox,
    UpdataCommnetBox,
    UpdateDivideLine,
    UpdateLength,
    UpdateButton,
    UpdateButtonWrapper,
} from './Comment.style';

export default function CommentUD({data}) {
    const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

    const [isUpdate, setIsUpdata] = useState(false);
    const [input, setInput] = useState({
        contents: '',
    });

    // const handleIsUpdate = () => {
    //     setIsUpdata((prev) => !prev);
    // };

    const handleChangeCommentInput = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        setInput({
            contents: data.contents,
        });
    }, [isUpdate]);

    const handleUpdateComment = () => {
        try {
            const result = updateUseditemQuestion({
                variables: {
                    updateUseditemQuestionInput: {
                        contents: input.contents,
                    },
                    useditemQuestionId: data._id,
                },
            });
            setIsUpdata((prev) => !prev);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            {isUpdate && (
                <UpdateWrapper>
                    <UpdateBox>
                        <UpdataCommnetBox
                            type="text"
                            name="contents"
                            defaultValue={data.contents}
                            onChange={handleChangeCommentInput}
                        ></UpdataCommnetBox>
                        <UpdateDivideLine></UpdateDivideLine>
                        <UpdateButtonWrapper>
                            <UpdateLength>46/100</UpdateLength>
                            <UpdateButton onClick={handleUpdateComment}>
                                수정하기
                            </UpdateButton>
                        </UpdateButtonWrapper>
                    </UpdateBox>
                </UpdateWrapper>
            )}
        </>
    );
}
