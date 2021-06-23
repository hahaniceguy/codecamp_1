import styled from '@emotion/styled';

export const Container = styled.div`
    height: 784px;
    width: 100%;
    /* width: 384px;
  height: 684px;
  background-color: gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-left: 47px; */
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000080;
`;

export const Backimg = styled.div`
    height: 784px;
    width: 100%;
    background-image: url('/dMUt0X3f59Q.png');
    background-size: cover;
    /* opacity: 20%; */
    position: relative;
`;

export const SingUpText = styled.div`
    margin-top: 20px;
    width: 120px;
    height: 40px;
    font-size: 28px;
    font-weight: 700;
    color: white;
    margin-bottom: 40px;
`;

export const Email = styled.div`
    width: 60px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 12px;
`;

export const EmailTextBox = styled.input`
    width: 384px;
    height: 64px;
    border-radius: 16px;
    border-color: #ffffff;
    background-color: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

export const Name = styled.div`
    width: 60px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 12px;
    margin-top: 20px;
`;

export const NameTextBox = styled.input`
    width: 384px;
    height: 64px;
    border-radius: 16px;
    border-color: #ffffff;
    background-color: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

export const Password = styled.div`
    width: 150px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 12px;
    margin-top: 20px;
`;

export const PasswordTextBox = styled.input`
    width: 384px;
    height: 64px;
    border-radius: 16px;
    border-color: #ffffff;
    background-color: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

export const RePassword = styled.div`
    width: 250px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 12px;
    margin-top: 20px;
`;

export const RePasswordTextBox = styled.input`
    width: 384px;
    height: 64px;
    border-radius: 16px;
    border-color: #ffffff;
    background-color: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

interface Iprops {
    isActive: boolean;
}

export const SignUpButton = styled.div`
    width: 384px;
    height: 64px;
    border-radius: 16px;
    margin-top: 40px;
    background-color: ${(props: Iprops) =>
        props.isActive ? '#ffd600' : '#4f4f4f'};
    font-size: 16px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TextBoxWrapper = styled.div`
    width: 384px;
    height: 556px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const EmailCheckBox = styled.div`
    width: 170px;
    height: 20px;
    margin-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: red;
    margin-top: 4px;
`;

export const NameCheckBox = styled.div`
    width: 170px;
    height: 20px;
    margin-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: red;
    margin-top: 4px;
`;

export const PasswordCheckBox = styled.div`
    width: 170px;
    height: 20px;
    margin-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: red;
    margin-top: 4px;
`;

export const RePasswordCheckBox = styled.div`
    width: 170px;
    height: 20px;
    margin-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: red;
    margin-top: 4px;
    margin-bottom: 60px;
`;

export const OkModal = styled.div`
    position: absolute;
    width: 464px;
    height: 306px;
    border-radius: 16px;
    background-color: white;
    z-index: 1000;
    top: 30%;
`;

export const ModalXimg = styled.img`
    width: 22px;
    height: 22px;
    margin-top: 23.51px;
    margin-left: 420px;
    cursor: pointer;
`;

export const ModalLogo = styled.img`
    width: 236px;
    height: 36px;
    margin-bottom: 40px;
`;

export const ModalText = styled.div`
    width: 217px;
    height: 26px;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 40px;
`;

export const ModalOk = styled.button`
    width: 384px;
    height: 62px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 16px;
    background-color: #ffd600;
    text-align: center;
    border: none;
`;

export const ModalWrapper = styled.div`
    width: 464px;
    height: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
