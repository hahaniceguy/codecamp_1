import BoardPageUI from './BoardPage.presenter';
import {useRef, useState} from 'react';
import {
    CREATE__BOARD,
    FETCH_BOARD,
    UPDATE__BOARD,
    UPLOAD_FILE,
} from './BoardPage.queries';
import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {
    Mutation,
    MutationCreateBoardArgs,
    MutationUpdateBoardArgs,
    Query,
    QueryFetchBoardArgs,
} from '../../../commons/types/generated/types';
import {checkImage} from '../../../commons/types/libraries/validations';

export default function BoardPage() {
    const router = useRouter();

    const [fileUrl, setFileUrl] = useState([]);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const imgRef1 = useRef<HTMLInputElement>();
    const imgRef2 = useRef<HTMLInputElement>();
    const imgRef3 = useRef<HTMLInputElement>();

    const [imgArr, setImgArr] = useState([1, 2, 3]);
    const [input, setInput] = useState({
        writer: '',
        password: '',
        title: '',
        content: '',
        youtubeUrl: '',
        // image: [''],
    });

    const [createBoard] =
        useMutation<Mutation, MutationCreateBoardArgs>(CREATE__BOARD);
    const [updateBoard] =
        useMutation<Mutation, MutationUpdateBoardArgs>(UPDATE__BOARD);

    const {data} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {boardId: String(router.query.id)},
    });

    const getStorageUrl = (url) => {
        return `https://storage.cloud.google.com/${url}`;
    };

    const onChangeFile = (id) => async (e) => {
        const file = e.target.files[0];
        if (!checkImage(file)) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            let newArr = [...fileUrl];
            newArr[id - 1] = String(event.target.result);
            setFileUrl(newArr);
            //   console.log(event.target.result);
            //   setFileUrl(String(event.target.result));
        };

        try {
            const {data} = await uploadFile({variables: {file}});
            //state에 저장
            //setFileUrl(getStorageUrl(data.uploadFile.url)); // TODO-2) []과 id를 사용해서, 내가 클릭한 위치에 url 저장하기
            let newArr = [...fileUrl];
            newArr[id - 1] = getStorageUrl(data.uploadFile.url);
            setFileUrl(newArr);
            //   if (fileUrl === e.target.id) {
            //     setFileUrl(getStorageUrl(data.uploadFile.url));
            //   }
        } catch (error) {
            alert(error.message);
        }
    };

    const onClickUpload = (e) => {
        if (e.target.id === '1') imgRef1.current?.click();
        if (e.target.id === '2') imgRef2.current?.click();
        if (e.target.id === '3') imgRef3.current?.click();
    };

    const handleChangeInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleClickDeleteimg = (e) => {
        let newArr = [...fileUrl];
        newArr.splice(Number(e.target.id) - 1, 1);
        setFileUrl(newArr);
        // newArr = newArr.filter((data) =>  !== e.target.id);

        console.log(e.target.id, 'a');
        // setFileUrl(fileUrl.filter());
        // fileUrl(setFileUrl.filter(fileUrl =>  !== Number(id)))
    };

    const handleClickCreateBoard = async () => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: input.writer,
                        password: input.password,
                        title: input.title,
                        contents: input.content,
                        images: fileUrl,
                    },
                },
            });
            console.log(result);
            alert('게시글 등록');
            router.push(`/board/${result.data.createBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const hadleUpdateBoard = async () => {
        try {
            const result = await updateBoard({
                variables: {
                    updateBoardInput: {
                        title: input.title,
                        contents: input.content,
                        youtubeUrl: input.youtubeUrl,
                        images: fileUrl,
                    },
                    password: input.password,
                    boardId: String(router.query.id),
                },
            });
            // console.log(result);
            alert('게시글 수정');
            router.push(`/board/${result.data.updateBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleListPage = () => {
        router.push(`/listPage`);
    };

    return (
        <BoardPageUI
            handleChangeInput={handleChangeInput}
            handleClickCreateBoard={handleClickCreateBoard}
            handleListPage={handleListPage}
            data={data}
            hadleUpdateBoard={hadleUpdateBoard}
            onClickUpload={onClickUpload}
            imgRef1={imgRef1}
            imgRef2={imgRef2}
            imgRef3={imgRef3}
            onChangeFile={onChangeFile}
            fileUrl={fileUrl}
            imgArr={imgArr}
            handleClickDeleteimg={handleClickDeleteimg}
        ></BoardPageUI>
    );
}
