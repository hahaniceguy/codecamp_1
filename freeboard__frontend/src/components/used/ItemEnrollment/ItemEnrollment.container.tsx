import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState, useRef} from 'react';
import {
    Mutation,
    MutationCreateUseditemArgs,
} from '../../../commons/types/generated/types';
import ItemEnrollemntUI from './ItemEnrollment.presenter';
import {CREATE_USED_ITEM} from './ItemEnrollment.queries';

export default function ItemEnrollemnt() {
    const router = useRouter();

    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [click, setClick] = useState(false);
    const [input, setInput] = useState({
        name: '',
        remarks: '',
        contents: '',
        price: '',
        tags: '',
    });
    const saveContents = (contents) => {
        const inputs = {...input};
        inputs.contents = contents;
        setInput(inputs);
    };
    console.log(input);

    const handleChangeInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        // console.log(event.target.value);
    };

    const handleClickCreateUsedItem = async () => {
        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput: {
                        name: input.name,
                        remarks: input.remarks,
                        contents: input.contents,
                        price: Number(input.price),
                        tags: [input.tags],
                    },
                },
            });
            alert('상품 등록');
            router.push(`/ItemEnrollment`);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleClickOff = () => {
        setClick(false);
    };
    const haleClickOn = () => {
        setClick(true);
    };

    // 1. 주소 ref 만들기
    const hostRef = useRef<HTMLInputElement>();

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
        const newAdress = fullAddress;
        hostRef.current.value = newAdress;
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    return (
        <ItemEnrollemntUI
            handleClickCreateUsedItem={handleClickCreateUsedItem}
            handleChangeInput={handleChangeInput}
            saveContents={saveContents}
            handleComplete={handleComplete}
            click={click}
            haleClickOn={haleClickOn}
            handleClickOff={handleClickOff}
            hostRef={hostRef}
        ></ItemEnrollemntUI>
    );
}
