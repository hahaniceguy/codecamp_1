import BoardListUI from './BoardList.presenter';
import {useQuery, useSubscription} from '@apollo/client';
import {FETCH_BOARDS, FETCH_BOARDSCOUNT} from './BoardList.queries';
import {useRouter} from 'next/router';
import BestList from '../BestList/BestList.container';
import {useEffect, useState} from 'react';
import {isTargetLikeServerless} from 'next/dist/next-server/server/config';
import {ClassNames} from '@emotion/react';

export default function BoardList() {
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const {data: count} = useQuery(FETCH_BOARDSCOUNT, {
        variables: {search: search},
    });
    const {data} = useQuery(FETCH_BOARDS, {
        variables: {
            page: currentPage,
            search: search,
        },
    });

    let list = [data?.fetchBoards];
    const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [numbers, setNumber] = useState(10);
    let aaa = Math.ceil(numbers / 10);

    useEffect(() => {
        if (count?.fetchBoardsCount < 100) {
            let searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            searchArr = searchArr.filter(
                (data) => data <= Math.ceil(count?.fetchBoardsCount / 10)
            );
            setCurrentPage(searchArr[0]);
            setPageArr(searchArr);
        } else {
            setPageArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }
    }, [count]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleClickSearch = () => {};

    const handleClickPage = (e) => {
        setCurrentPage(Number(e.target.id));
    };

    const handleRightPage = () => {
        // if(pageArr[9] >= aaa[0]){
        //     // for(let i = Number(pageArr); pageArr.length > Number(aaa); i++)
        //     let newArr = pageArr.map((data) => data + 10)
        //      newArr = newArr.filter(data => data <= aaa[0])
        //     setCurrentPage(newArr[0])
        //       setPageArr(newArr)
        //     return;
        // }

        if (
            pageArr[pageArr.length - 1] >=
            Math.ceil(count?.fetchBoardsCount) / 10
        ) {
            return;
        }

        // if(count?.fetchBoardsCount > 100){
        //     let newArr = pageArr;
        //     newArr = newArr.map((data) => data + 10);
        //         for(let i = 0; i < newArr.length; i++){
        //             if(newArr[i] > ??){

        //             }
        //             return
        //         }
        // }else{
        //     return
        // }

        let newArr = pageArr.map((data) => data + 10);
        newArr = newArr.filter(
            (data) => data <= Math.ceil(count?.fetchBoardsCount / 10)
        );
        setCurrentPage(newArr[0]);
        setPageArr(newArr);
    };

    const handleLeftPage = () => {
        let newArr = pageArr.map((data) => data - 10);
        if (pageArr[0] === 1) {
            return;
        }

        if (newArr.length !== 10) {
            let count = newArr[0];
            for (let i = 0; i < 10; i++) {
                newArr[i] = count++;
            }
        }

        setCurrentPage(newArr[0]);
        setPageArr(newArr);
    };

    const handleCreatePage = () => {
        router.push(`/newBoard`);
    };

    const handleListClick = (e) => {
        router.push(`/board/${e.target.id}`);
    };

    return (
        <>
            <BestList></BestList>
            <BoardListUI
                data={data}
                handleCreatePage={handleCreatePage}
                handleListClick={handleListClick}
                count={count}
                handleRightPage={handleRightPage}
                pageArr={pageArr}
                handleClickPage={handleClickPage}
                handleLeftPage={handleLeftPage}
                currentPage={currentPage}
                handleInput={handleInput}
                handleClickSearch={handleClickSearch}
            ></BoardListUI>
        </>
    );
}
