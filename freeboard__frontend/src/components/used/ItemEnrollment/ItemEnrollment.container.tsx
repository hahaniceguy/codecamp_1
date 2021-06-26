import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState, useRef, useEffect} from 'react';
import {
    Mutation,
    MutationCreateUseditemArgs,
} from '../../../commons/types/generated/types';
import ItemEnrollemntUI from './ItemEnrollment.presenter';
import {
    CREATE_USED_ITEM,
    FETCH_USED_ITEM,
    UPDATE_USED_ITEM,
} from './ItemEnrollment.queries';

const initInput = {
    name: '',
    remarks: '',
    contents: '',
    price: '',
    tags: '',
};

export default function ItemEnrollemnt() {
    const router = useRouter();
    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
    const {data: updata} = useQuery(FETCH_USED_ITEM, {
        variables: {useditemId: String(router.query.id)},
    });
    const [click, setClick] = useState(false);

    const [input, setInput] = useState(initInput);

    useEffect(() => {
        if (updata) {
            const inputs = {...updata.fetchUseditem};

            // inputs.name = updata.fetchUseditem.name;
            // inputs.contents = updata.fetchUseditem.contents;

            setInput(inputs);
        }
    }, [updata]);

    const saveContents = (contents) => {
        const inputs = {...input};
        inputs.contents = contents;
        setInput(inputs);
    };

    const handleChangeInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        // console.log(event.target.value);
    };

    const handleCancle = () => {
        router.push(`/Itemlist`);
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

    const handleUpdateItem = async () => {
        const tags = typeof input.tags === 'string' ? [input.tags] : input.tags;

        try {
            const result = await updateUseditem({
                variables: {
                    updateUseditemInput: {
                        name: input.name,
                        remarks: input.remarks,
                        contents: input.contents,
                        price: Number(input.price),
                        tags: tags,
                    },
                    useditemId: String(router.query.id),
                },
            });
            alert('상품 수정');

            //@ts-ignore
            router.push(`/detail/${result.data.updateUseditem._id}`);
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
            input={input}
            handleComplete={handleComplete}
            click={click}
            haleClickOn={haleClickOn}
            handleClickOff={handleClickOff}
            hostRef={hostRef}
            updata={updata}
            handleUpdateItem={handleUpdateItem}
            handleCancle={handleCancle}
        ></ItemEnrollemntUI>
    );
}
