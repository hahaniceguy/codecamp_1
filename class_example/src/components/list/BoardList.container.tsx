import {useQuery} from '@apollo/client';
import BoardListUI from './BoardList.presenter3';
import {FETCH_BOARDS} from './BoardList.queries';
import {IQuery} from '../../commons/types/generated/types';
import {useState} from 'react'

const BoardListPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useQuery<IQuery>(FETCH_BOARDS, {variables: {page:1}});

    const onClickPage = (event) => {
        setCurrentPage(Number(event.target.id))
    }
  
  return (
      <BoardListUI data={data} onClickPage={onClickPage} currentPage={currentPage} />
  )
};

export default BoardListPage;
