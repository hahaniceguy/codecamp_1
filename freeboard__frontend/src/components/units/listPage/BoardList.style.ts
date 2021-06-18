import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const TopWrapper = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const LineWrapper = styled.div`
  width: 1200px;
  margin-top: 40px;
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
`;

export const ContentWrapper = styled.div`
  width: 1200px;
  height: 52px;
  border-top: 2px solid lightgray;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Number = styled.div`
  width: 10%;
  height: 27px;
  font-weight: 600;
`;

export const Title = styled.div`
  width: 50%;
  height: 27px;
  font-weight: 600;
`;

export const Writer = styled.div`
  width: 20%;
  height: 27px;
  font-weight: 600;
`;

export const Data = styled.div`
  width: 20%;
  height: 27px;
  font-weight: 600;
`;

export const ContentNum = styled.div`
  width: 10%;
  height: 27px;
  font-weight: 600;
`;

export const ContentTitle = styled.div`
  width: 50%;
  height: 27px;
  font-weight: 600;
  cursor: pointer;
`;

export const ContentWriter = styled.div`
  width: 20%;
  height: 27px;
  font-weight: 600;
`;

export const ContentData = styled.div`
  width: 20%;
  height: 27px;
  font-weight: 600;
`;

export const Search = styled.input`
  background-color: #e5e5e5;
  border: none;
  font-size: 16px;
  width: 450px;
  height: 50px;
`;

export const Magni = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 19px;
  margin-right: 11.51px;
`;

export const SearchWrapper = styled.div`
  width: 588px;
  height: 52px;
  border-radius: 13px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
`;

export const Calendar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Date = styled.div`
  width: auto;
  height: 24px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const Line = styled.span`
  display: flex;
  padding-bottom: 6px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: row;
  align-items: center;
  justify-content: center;
`;

export const MainCalendarWrapper = styled.div`
  width: 282px;
  height: 52px;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;

export const Retrieve = styled.div`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  cursor: pointer;
`;

export const HighWrapper = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  justify-content: space-between;
`;

export const Enrollment = styled.div`
  width: 117px;
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

export const EnrollmentWrapper = styled.div`
  width: 171px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 13px;
`;

export const Pencle = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 11px;
`;

export const EndWrapper = styled.div`
  width: 1200px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;

export const LeftArrowImg = styled.img`
  width: 10px;
  height: 19px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

interface Iprops {
  isActive: boolean;
}

export const NumCount = styled.div`
  width: 10px;
  height: 19px;
  border: none;
  font-size: 14px;
  font-weight: 450;
  color: ${(props: Iprops) => (props.isActive ? 'red' : 'black')};
  cursor: pointer;
`;

export const NumberWrapper = styled.div`
  width: 858px;
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-around;
  flex-direction: center;
`;

export const Empth = styled.div`
  width: 171px;
`;
