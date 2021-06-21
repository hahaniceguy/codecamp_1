import BoardPage from './Comment.presenteritem';

import {
    CommentWrapper,
    Image,
    CommentBox,
    BottomWrapper,
    WritherBox,
    PasswordBox,
    Star,
    StarWrapper,
    CommentFullWrapper,
    ContentView,
    ContentWrapper,
    ContentWrite,
    TextComment,
    WrapperBoss,
} from './Comment.styles';
import InfiniteScroll from 'react-infinite-scroller';
export default function CommentUI({
    data,
    handleChangeInput,
    handleClickCreateBoardComment,
    comment,
    input,
    refetch,
    rating,
    handleClickRating,
    onLoadMore,
}) {
    // console.log(comment?.fetchBoardComments, "댓글")
    return (
        <WrapperBoss>
            <CommentWrapper>
                <Image src="/Comment.png"></Image>
                <CommentBox>댓글</CommentBox>
            </CommentWrapper>
            <BottomWrapper>
                <WritherBox
                    name="writer"
                    type="textbox"
                    placeholder="작성자"
                    onChange={handleChangeInput}
                    value={input.writer}
                ></WritherBox>
                <PasswordBox
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    onChange={handleChangeInput}
                    value={input.password}
                ></PasswordBox>
                <StarWrapper>
                    {['1', '2', '3', '4', '5'].map((data, index) => (
                        <Star
                            onClick={handleClickRating}
                            id={data}
                            src={
                                Number(rating) > Number(index)
                                    ? '/YellowStar.png'
                                    : '/Star.png'
                            }
                        ></Star>
                    ))}
                </StarWrapper>
            </BottomWrapper>
            <CommentFullWrapper>
                <ContentView
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    name="contents"
                    onChange={handleChangeInput}
                    value={input.contents}
                ></ContentView>
                <ContentWrapper>
                    <ContentWrite placeholder="0/100"></ContentWrite>
                    {!data ? (
                        <TextComment>수정하기</TextComment>
                    ) : (
                        <TextComment onClick={handleClickCreateBoardComment}>
                            등록하기
                        </TextComment>
                    )}
                </ContentWrapper>
            </CommentFullWrapper>
            <InfiniteScroll hasMore={true} loadMore={onLoadMore}>
                <div>
                    {comment?.fetchBoardComments.map((comment) => (
                        <BoardPage
                            data={data}
                            comment={comment}
                            refetch={refetch}
                            rating={rating}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </WrapperBoss>
    );
}
