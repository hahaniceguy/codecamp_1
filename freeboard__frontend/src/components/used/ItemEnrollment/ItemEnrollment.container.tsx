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
    UPLOAD_FILE,
} from './ItemEnrollment.queries';

const initInput = {
    name: '',
    remarks: '',
    contents: '',
    price: '',
    tags: '',
    images: [],
};

export default function ItemEnrollemnt() {
    const router = useRouter();
    const [myImg, setMyImg] = useState('');
    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const {data: updata} = useQuery(FETCH_USED_ITEM, {
        variables: {useditemId: String(router.query.id)},
    });
    const [click, setClick] = useState(false);

    const [input, setInput] = useState(initInput);

    useEffect(() => {
        if (updata) {
            const inputs = {...updata.fetchUseditem};
            setInput(inputs);
        }
    }, [updata]);

    const onChangeFile = async (e) => {
        const file = e.target.files[0];
        if (file !== undefined) {
            const {data} = await uploadFile({variables: {file}});
            setMyImg(`https://storage.cloud.google.com/${data.uploadFile.url}`);

            const inputs = {...input};
            inputs.images.push(
                `https://storage.cloud.google.com/${data.uploadFile.url}`
            );
            setInput(inputs);
        }
        // setInput({
        //     ...input,
        //     images: [`https://storage.cloud.google.com/${data.uploadFile.url}`],
        // });
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = (event) => {
        //     setMyImg(String(event.target.result));
        // };
    };
    console.log(myImg, 'img');
    console.log(input);

    const onClickDeleteImg = (idx) => {
        if (input.images[idx] !== undefined) {
            let inputs = {...input};
            inputs.images[idx] = null;

            inputs.images = inputs.images.filter((el) => el !== null);
            setInput(inputs);
            // setInput({
            //     ...input,
            //     images: input.images.splice((Number(idx), 1)),
            // });
        }
        // setMyImg(String(['']));
        // setInput({
        //     ...input,
        //     images: [''],
        // });
    };

    const imgRef = useRef<HTMLInputElement>();

    const saveContents = (contents) => {
        const inputs = {...input};
        inputs.contents = contents;
        setInput(inputs);
    };

    const onClickUpload = () => {
        imgRef.current?.click();
        // for (let i = 0; i <= 4; i++) {
        //     initInput.images.length === i;
        // }
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
                        images: input.images,
                    },
                },
            });
            console.log(result);

            alert('상품 등록');
            router.push(`/Itemlist`);
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
            inputData={input}
            handleComplete={handleComplete}
            click={click}
            haleClickOn={haleClickOn}
            handleClickOff={handleClickOff}
            hostRef={hostRef}
            updata={updata}
            handleUpdateItem={handleUpdateItem}
            handleCancle={handleCancle}
            onChangeFile={onChangeFile}
            imgRef={imgRef}
            onClickUpload={onClickUpload}
            myImg={myImg}
            onClickDeleteImg={onClickDeleteImg}
        ></ItemEnrollemntUI>
    );
}
