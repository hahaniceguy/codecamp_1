import {
    Wrapper,
    ItemTitle,
    ItemName,
    ItemNameBox,
    OnePoint,
    OnePointWrapper,
    ItemExplanation,
    ItemExplanationBox,
    SellCount,
    SellCountBox,
    Tag,
    TagBox,
    TradeNavi,
    Map,
    Address,
    AddressBox,
    AddressBox2,
    Picture,
    PictureImg,
    XImg,
    ImgBox,
    Plus,
    MainPicture,
    RadioButton,
    ButtonName,
    Enrollment,
    AddressWrapper,
    TradeNaviWrapper,
    TradeMapWrapper,
    PictureWrapper,
    ButtonWrapper,
    MiniWrapper,
    AddressCode,
    AddressCodeWrapper,
    DaumpostWrapper,
    Close,
    DaumXimg,
    DaumXimgWrapper,
    ReactQuillWrapper,
} from './ItemEnrollment.styles';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import KakaoMap from '../../commons/map/index';
import DaumPostcode from 'react-daum-postcode';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});

export default function ItemEnrollemntUI({
    handleChangeInput,
    handleClickCreateUsedItem,
    saveContents,
    handleComplete,
    click,
    haleClickOn,
    handleClickOff,
    hostRef,
}) {
    return (
        <Wrapper>
            <ItemTitle>상품 등록하기</ItemTitle>
            <MiniWrapper>
                <ItemName>상품명</ItemName>
                <ItemNameBox
                    type="text"
                    name="name"
                    placeholder="상품명을 작성해주세요."
                    onChange={handleChangeInput}
                ></ItemNameBox>
                <OnePoint>한줄요약</OnePoint>
                <OnePointWrapper
                    type="text"
                    name="remarks"
                    placeholder="상품명을 작성해주세요."
                    onChange={handleChangeInput}
                ></OnePointWrapper>
                <ItemExplanation>상품설명</ItemExplanation>

                <ReactQuillWrapper>
                    <ReactQuill style={{height: 250}} onChange={saveContents} />
                </ReactQuillWrapper>
                {/* <ItemExplanationBox
                    name="contents"
                    placeholder="상품을 설명해주세요."
                    onChange={handleChangeInput}
                ></ItemExplanationBox> */}
                <SellCount>판매가격</SellCount>
                <SellCountBox
                    type="text"
                    name="price"
                    placeholder="판매 가격을 입력해주세요."
                    onChange={handleChangeInput}
                ></SellCountBox>
                <Tag>태그입력</Tag>
                <TagBox
                    type="text"
                    name="tags"
                    placeholder="#태그 #태그 #태그"
                    onChange={handleChangeInput}
                ></TagBox>
                <TradeNaviWrapper>
                    <TradeMapWrapper>
                        <TradeNavi>거래위치</TradeNavi>
                        <KakaoMap />
                        {/* <Map src="/map.png"></Map> */}
                    </TradeMapWrapper>
                    <AddressWrapper>
                        <AddressCodeWrapper>
                            <Address>주소</Address>
                            <AddressCode onClick={haleClickOn}>
                                주소찾기
                            </AddressCode>
                            {click && (
                                <DaumpostWrapper>
                                    {/* <DaumXimgWrapper>
                                        <DaumXimg
                                            src="/BlackX.png"
                                            onClick={handleClickOff}
                                        ></DaumXimg>
                                    </DaumXimgWrapper> */}
                                    <DaumPostcode
                                        onComplete={handleComplete}
                                    ></DaumPostcode>
                                    <Close onClick={handleClickOff}>닫기</Close>
                                </DaumpostWrapper>
                            )}
                        </AddressCodeWrapper>
                        <AddressBox ref={hostRef} />
                        <AddressBox2 />
                    </AddressWrapper>
                </TradeNaviWrapper>
                <Picture>사진 첨부</Picture>
                <PictureWrapper>
                    <PictureImg src="/galt2.png"></PictureImg>
                    <XImg src="/X.png"></XImg>
                    <ImgBox>
                        <Plus>
                            +<br /> Upload
                        </Plus>
                    </ImgBox>
                </PictureWrapper>
                <MainPicture>메인 사진 설정</MainPicture>
                <ButtonWrapper>
                    <RadioButton type="radio"></RadioButton>
                    <ButtonName>사진 1</ButtonName>
                    <RadioButton type="radio"></RadioButton>
                    <ButtonName>사진 2</ButtonName>
                </ButtonWrapper>
            </MiniWrapper>
            <Enrollment onClick={handleClickCreateUsedItem}>
                등록하기
            </Enrollment>
        </Wrapper>
    );
}
