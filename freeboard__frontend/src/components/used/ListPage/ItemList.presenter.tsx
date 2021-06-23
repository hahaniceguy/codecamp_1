import {
    SaleWrapper,
    SaleItem,
    SaleEnd,
    SearchImg,
    Searching,
    SearchWrapper,
    CalendarImg,
    Date,
    Line,
    DateWrapper,
    Search,
    SaleImg,
    ItemName,
    OneLineExplanation,
    Tag,
    ProfileImg,
    ProfileName,
    HeartIgm,
    LikeCount,
    MoneyImg,
    MoneyCount,
    ItemWrapper,
    ProfileWrapper,
    MoneyWrapper,
    ItemProfileWrapper,
    ListWrapper,
    Wrapper,
    DivideLine,
    UsedItemEnrollment,
    ItemlistWrapper,
} from './ItemList.styles';
import InfiniteScroll from 'react-infinite-scroller';

export default function ItemListUI({
    data,
    handleCreateItem,
    onLoadMore,
    handleClickItem,
}) {
    return (
        <>
            <SaleWrapper>
                <SaleItem>판매중상품</SaleItem>
                <SaleEnd>판매된상품</SaleEnd>
                <SearchWrapper>
                    <SearchImg src="/Magni.png"></SearchImg>
                    <Searching placeholder="제품을 검색해주세요."></Searching>
                </SearchWrapper>
                <DateWrapper>
                    <CalendarImg
                        style={{paddingLeft: 18}}
                        src="/cal.png"
                    ></CalendarImg>
                    <Date>2020.12.02</Date>
                    <Line>~</Line>
                    <CalendarImg src="/cal.png"></CalendarImg>
                    <Date>2020.12.02</Date>
                </DateWrapper>
                <Search>검색</Search>
            </SaleWrapper>
            <Wrapper>
                {/* <div> */}
                <InfiniteScroll
                    hasMore={true}
                    loadMore={onLoadMore}
                    useWindow={false}
                >
                    {data?.fetchUseditems?.map((data) => (
                        <ItemlistWrapper key={data._id}>
                            <SaleImg src="/gtap.png"></SaleImg>
                            <ListWrapper>
                                <ItemProfileWrapper>
                                    <ItemWrapper>
                                        <ItemName
                                            onClick={handleClickItem}
                                            id={data._id}
                                        >
                                            {data.name}
                                        </ItemName>
                                        <OneLineExplanation>
                                            {data.remarks}
                                        </OneLineExplanation>
                                        <Tag>{data.tags}</Tag>
                                    </ItemWrapper>
                                    <ProfileWrapper>
                                        <ProfileImg src="/profileImg.png"></ProfileImg>
                                        <ProfileName>
                                            {data.seller.name}
                                        </ProfileName>
                                        <HeartIgm src="/Heart.png"></HeartIgm>
                                        <LikeCount>20</LikeCount>
                                    </ProfileWrapper>
                                </ItemProfileWrapper>
                                <MoneyWrapper>
                                    <MoneyImg src="/Money.png"></MoneyImg>
                                    <MoneyCount>{data.price}</MoneyCount>
                                </MoneyWrapper>
                            </ListWrapper>
                        </ItemlistWrapper>
                    ))}
                </InfiniteScroll>
                {/* </div> */}
            </Wrapper>
            {/* <DivideLine></DivideLine> */}
            <UsedItemEnrollment onClick={handleCreateItem}>
                상품 등록하기
            </UsedItemEnrollment>
        </>
    );
}
