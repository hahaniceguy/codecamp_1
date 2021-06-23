import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import {gql, useMutation, useQuery} from '@apollo/client';
import {useState} from 'react';

// import ReactQuill from 'react-quill';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});

const CREAT_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            contents
        }
    }
`;

const EditorPage = () => {
    const [createBoard] = useMutation(CREAT_BOARD);
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: '60cc366ad110d9002b0f5ed4'},
    });
    const [contents, setContents] = useState('');

    const onChangeEditor = (contents) => {
        // console.log(contents);
    };

    const onClickSubmit = async () => {
        setIsSubmitting(true);
        try {
            await createBoard({
                variables: {
                    createBoardInput: {
                        wirter: '철수',
                        passowrd: '1234',
                        title: '제목입니다.',
                        contents,
                    },
                },
            });
        } catch (error) {
            alert(error.message);
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false); //*연속적인 등록 방지
    //   if (typeof window === undefined) return <div></div>;
    return (
        <>
            <ReactQuill onChange={onChangeEditor} />
            <button onClick={onClickSubmit} disabled={isSubmitting}>
                등록하기
            </button>
            {/* <div dangerouslySetInnerHTML={{__html: data?.fetchBoard.contents}}></div>
      <div>{data?.fetchBoard.contents}</div> */}
        </>
    );
};

export default EditorPage;
