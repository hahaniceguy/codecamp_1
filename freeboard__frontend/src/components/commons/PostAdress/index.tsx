import React, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from '@emotion/styled';

const PostCodeStyle = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    width: 400px;
    height: 500px;
    padding: 7px;
`;

const [isAddress, setIsAddress] = useState('');
const [isZoneCode, setIsZoneCode] = useState();

const Postcode = () => {
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
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        // setIsPostOpen(false);
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    return (
        <PostCodeStyle>
            <DaumPostcode onComplete={handleComplete} />
        </PostCodeStyle>
    );
};

export default Postcode;
