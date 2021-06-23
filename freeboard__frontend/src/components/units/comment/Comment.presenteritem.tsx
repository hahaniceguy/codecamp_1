import {UPDATE_COMMENTBOARD, DELETE_COMMENTBOARD} from './Comment.queries';
import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {
    CommentListWrapper,
    BottomCommentWrapper,
    CommentProfile,
    CommentTitleWrapper,
    CommentTextWrapper,
    CommentWriterWrapper,
    CommentWriter,
    PasswordBox,
    StarWrapper,
    ImgWrapper,
    Pencle,
    Cancel,
    Star,
    CommentTitle,
    Date,
    TextBox,
    TextBoxWrapper,
    UpdateCommentBox,
    UpdateCommentLength,
    UpdateCommentButton,
    UpdatemiddleWrapper,
    UpdateCommentWrapper,
    UpdateCommentMainWrapper,
    ModalView,
    ModalPassword,
    ModalWrapper,
} from './Comment.styles';
import {} from './Comment.container';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';

export default function BoardPage({data, comment, refetch, rating}) {
    const router = useRouter();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [remove, setRemove] = useState('');
    const [writerid, setWriterid] = useState('');
    const [star, setStar] = useState(0);
    const [input, setInput] = useState({
        contents: '',
        rating: '',
        password: '',
        writer: '',
    });

    const [deleteCommentBoard] = useMutation(DELETE_COMMENTBOARD);

    const showModal = (event) => {
        setWriterid(event.target.id);
        // setRemove((prev) => ({
        //     ...prev,
        //     [event.target.password] : event.target.value
        // }))
        setIsModalVisible(true);
    };

    const handleStar = (event) => {
        setStar(Number(event.target.id));
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleRemove = (e) => {
        setRemove(e.target.value);
    };

    const handleDeleteComment = async () => {
        try {
            const result = await deleteCommentBoard({
                variables: {
                    password: remove,
                    boardCommentId: writerid,
                },
            });
            setIsModalVisible(false);
            refetch();
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        setInput({
            contents: comment.contents,
            rating: '',
            password: '',
            writer: comment.writer,
        });
    }, [isUpdate]);

    const [updateCommentBoard] = useMutation(UPDATE_COMMENTBOARD);

    const handleIsUpdate = () => {
        setIsUpdate((prev) => !prev);
        //* setIsUpdate(true)
        //* setIsUpdate ((prev)=>{!prev})
    };

    const handleChangeCommentInput = (event) => {
        // console.log(input)
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const hadleUpdateCommentBoard = async () => {
        try {
            const result = await updateCommentBoard({
                variables: {
                    updateBoardCommentInput: {
                        rating: input.rating,
                        contents: input.contents,
                    },
                    password: input.password,
                    boardCommentId: comment._id,
                },
            });
            setIsUpdate((prev) => !prev);
            // console.log(result);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Modal
                title="삭제 하시겠습니까 ?"
                visible={isModalVisible}
                onOk={handleDeleteComment}
                onCancel={handleCancel}
            >
                <ModalWrapper>
                    <ModalView>password 입력</ModalView>
                    <ModalPassword
                        type="password"
                        onChange={handleRemove}
                    ></ModalPassword>
                </ModalWrapper>
            </Modal>

            {isUpdate ? (
                <UpdateCommentMainWrapper>
                    <TextBoxWrapper>
                        <TextBox
                            type="text"
                            name="writer"
                            onChange={handleChangeCommentInput}
                            defaultValue={comment.writer}
                            value={input.writer}
                        ></TextBox>
                        <TextBox
                            name="password"
                            onChange={handleChangeCommentInput}
                        ></TextBox>
                        <StarWrapper>
                            {['1', '2', '3', '4', '5'].map((data, index) => (
                                <Star
                                    onClick={handleStar}
                                    id={data}
                                    src={
                                        Number(star) > Number(index)
                                            ? '/YellowStar.png'
                                            : '/Star.png'
                                    }
                                ></Star>
                            ))}
                        </StarWrapper>
                    </TextBoxWrapper>
                    <UpdateCommentWrapper>
                        <UpdateCommentBox
                            name="contents"
                            onChange={handleChangeCommentInput}
                        ></UpdateCommentBox>
                        <UpdatemiddleWrapper>
                            <UpdateCommentLength>14/100</UpdateCommentLength>
                            <UpdateCommentButton
                                onClick={hadleUpdateCommentBoard}
                            >
                                수정하기
                            </UpdateCommentButton>
                        </UpdatemiddleWrapper>
                    </UpdateCommentWrapper>
                </UpdateCommentMainWrapper>
            ) : (
                <CommentListWrapper>
                    <BottomCommentWrapper key={comment._id}>
                        <CommentProfile src="/profileImg.png"></CommentProfile>
                        <CommentTitleWrapper>
                            <CommentTextWrapper>
                                <CommentWriterWrapper>
                                    <CommentWriter>
                                        {comment.writer}
                                    </CommentWriter>
                                    {data ? (
                                        ''
                                    ) : (
                                        <PasswordBox
                                            defaultValue={
                                                data?.fetchBoardComments
                                                    ?.password
                                            }
                                        ></PasswordBox>
                                    )}
                                    <StarWrapper>
                                        {['1', '2', '3', '4', '5'].map(
                                            (data, index) => (
                                                <Star
                                                    id={data}
                                                    src={
                                                        comment.rating > index
                                                            ? '/YellowStar.png'
                                                            : '/Star.png'
                                                    }
                                                ></Star>
                                            )
                                        )}
                                    </StarWrapper>
                                </CommentWriterWrapper>
                                <ImgWrapper>
                                    <Pencle
                                        onClick={handleIsUpdate}
                                        src="/Pencle.png"
                                    ></Pencle>
                                    <Cancel
                                        id={comment._id}
                                        onClick={showModal}
                                        src="/X.png"
                                    ></Cancel>
                                </ImgWrapper>
                            </CommentTextWrapper>
                            <CommentTitle>{comment.contents}</CommentTitle>
                            <Date>{comment.createdAt.slice(0, 10)}</Date>
                        </CommentTitleWrapper>
                    </BottomCommentWrapper>
                </CommentListWrapper>
            )}
        </div>
    );
}
