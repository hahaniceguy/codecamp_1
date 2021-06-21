import React, {useState} from 'react';
import styled from '@emotion/styled';

const Signup = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00000080;
    z-index: 10000;
`;
const ModalContainer = styled.div`
    position: absolute;
    width: 375px;
    height: 620px;
    left: 50%;
    top: 70%;
    background-color: lightgrey;
`;
const Button = styled.button`
    width: 100px;
    height: 100px;
    cursor: pointer;
`;

export default function TestPage() {
    const [on, setOn] = useState(false);

    const onClickSwitchOn = () => {
        setOn(true);
    };

    const onClickSwitchOff = () => {
        setOn(false);
    };

    return (
        <>
            <Button type="button" onClick={onClickSwitchOn}>
                로그인
            </Button>

            <Signup>회원가입</Signup>

            {on && (
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <Button type="button" onClick={onClickSwitchOff}>
                        X
                    </Button>
                </ModalContainer>
            )}
        </>
    );
}
