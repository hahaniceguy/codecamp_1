import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: center; //x축 중앙 정렬
  align-items: center; //y축 중앙 정렬
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700; //font 굵기
`;

export const Box = styled.div`
  width: 1200px;
  height: 1847px;
  display: flex; //flex 사용 선언
  flex-direction: column; //flex로 감싼 박스들 정렬 column -> 세로 정렬 row -> 가로 정렬
  align-items: center;
  box-shadow: 0px 4px 20px 0px; //box 바깥쪽 음영주기
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center; //flex 안에 있는 박스들 가운데
  border: 1px;
  padding-top: 60px; //padding 안쪽 여백 margin 바깥쪽 여백
  padding-bottom: 80px;
`;

export const Semititle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Semittitlewrapper = styled.input`
  //textarea 랑 비슷하면서 다름
  border: 1px solid rgba(0, 0, 0, 0.3); //box 테두리 음영
  width: 996px;
  height: 52px;
  padding-left: 10px;
`;

export const Memo = styled.textarea`
  //textarea 텍스트 작성 박스
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 996px;
  height: 480px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const SemititleWrapper = styled.div`
  display: flex;
  border: 1px;
  padding-top: 40px;
`;

export const Semittitlewrapper2 = styled.div`
  display: flex;
  border: 1px;
  padding-top: 16px;
`;

export const Post = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 77px;
  height: 52px;
  text-align: center;
`;

export const Semepost = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 996px;
  height: 52px;
`;

export const YouWrapper = styled.div`
  display: flex;
  border: 1px;
  padding-top: 37px;
`;

export const Link = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 996px;
  height: 45.78px;
  padding-left: 10px;
`;

export const Linkwrapper = styled.div`
  display: flex;
  border: 1px;
  padding-top: 14.09px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  border: 1px;
  padding-top: 40px;
`;

export const Photo = styled.input`
  width: 0.1px;
  height: 0.1px;
  background-color: #bdbdbd;
  border: none;
  cursor: pointer;
`;

// export const PhotoLabel = styled.div`
//   width: 78px;
//   height: 78px;
//   background-color: #bdbdbd;
//   cursor: pointer;
//   /* position: relative; */
// `;

export const Plus = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #bdbdbd;
  cursor: pointer;
`;

export const Cancelimg = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  position: absolute;
`;

export const PhotoBtnWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

export const Viewimg = styled.img`
  width: 78px;
  height: 78px;
  cursor: pointer;
`;

export const MainRadio = styled.input`
  padding-right: 5px;
`;

export const MainRadioLabel = styled.label``; //radio버튼

export const Enrollment = styled.button`
  //button 박스
  border: none;
  background-color: #ffd600;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 60px;
  padding-right: 60px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const Cancel = styled.button`
  border: none;
  background-color: #bdbdbd;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 60px;
  padding-right: 60px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const EnrollmentWapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px;
  padding-top: 80px;
`;

export const MainWrarper = styled.div`
  padding-top: 40px;
`;

export const Twowrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nametext = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 486px;
  height: 52px;
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const FourWrapper = styled.div`
  display: flex;
  width: 996px;
  justify-content: space-between;
`;

export const Body = styled.div`
  width: 996px;
`;

export const PostSearch = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  margin-left: 16px;
  border: none;
  cursor: pointer;
`;

export const Star = styled.span`
  //예 : <Semititle></Semititle> 안에 내용 추가 가능
  color: #ffd600;
`;
