{!board ? <></> : board.fetchBoard.writer}

if(board) {
    <div>board.fetchBoard.writer</div>  
} else {
    return <></>
}

//*삼항연산자
board ? <div>board.fetchBoard.writer</div> : ''

//* &&연산자
board && <div>board.fetchBoard.writer</div>

//* 옵셔널 체이닝
board?.fetchBoard.writer

// ! : 1. 숫자 0
//     2. undefined
//     3. null
//     4. ""

    
// var addrDtl = 쿼리에서 받아온 변수 셋;
// if(!addrDtl == unde || addrDtl ==null || addrDtl ==""){
//     return;
// }