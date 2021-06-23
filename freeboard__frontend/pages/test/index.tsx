import React, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from '@emotion/styled';

const Click = styled.div`
    position: absolute;
    width: 464px;
    height: 306px;
    border-radius: 16px;
    background-color: white;
    z-index: 1000;
    top: 30%;
`;
const ClickWrapper = styled.div`
    width: 600px;
    height: 600px;
    background-color: white;
`;

const Aaa = styled.button`
    width: 464px;
    height: 40px;
`;

export default function Postcode() {
    const [click, setClick] = useState(false);

    const handleClickOff = () => {
        setClick(false);
    };
    const haleClickTwo = () => {
        setClick(true);
    };

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    return (
        <div>
            <button onClick={haleClickTwo}>click</button>
            {click && (
                <ClickWrapper>
                    <Click>
                        <DaumPostcode
                            onComplete={handleComplete}
                        ></DaumPostcode>
                        <Aaa onClick={handleClickOff}>close</Aaa>
                    </Click>
                </ClickWrapper>
            )}
            {/* <DaumPostcode onComplete={handleComplete} /> */}
        </div>
    );
}
