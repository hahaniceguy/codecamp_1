import {RegisterButton} from './QueryWrite.styles';

const QueryWriteUI = ({onClickSubmit, onChangeInput, aaa, inputRef, handleChangeCcc}) => {

  return (
    <div>
      <span>이름: </span>
      <input type="text" name="name" onChange={onChangeInput} ref={inputRef}></input>
      <br />
      <span>나이: </span>
      <input type="text" name="age" onChange={onChangeInput}></input>
      <br />
      <span>학교: </span>
      <input type="text" name="school" onChange={onChangeInput}></input>
      <br />
      <RegisterButton onClick={onClickSubmit} aaa={aaa}>
        프로필 등록하기
      </RegisterButton>
      <button onClick={handleChangeCcc}>CCC변경하기</button>
    </div>
  );
};

export default QueryWriteUI;
