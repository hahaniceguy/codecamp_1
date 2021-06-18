import BoardUI from './BoardWrite.presenter';
import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {CREATE_BOARD} from './BoardWrite.queries';

//* 기능 사용할게
import {useRouter} from 'next/router';

function BoardWritePage() {
  //* router선언 = useRouter()
  const router = useRouter();

  const [input, setInput] = useState({
    writer: '',
    password: '',
    title: '',
    content: '',
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const handleChangeInput = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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
          },
        },
      });
      console.log(result, '성공했니니니니니니');
      alert('게시글 등록 성공');
      router.push(`/board/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BoardUI
      handleChangeInput={handleChangeInput}
      handleClickCreateBoard={handleClickCreateBoard}
    ></BoardUI>
  );
}

export default BoardWritePage;
