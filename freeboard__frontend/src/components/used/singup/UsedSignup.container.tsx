import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useContext, useState} from 'react';
import {
    Mutation,
    MutationCreateUserArgs,
} from '../../../commons/types/generated/types';
import SignUpUI from './UsedSignup.presenter';
import {CREATE_USER} from './UsedSignup.queries';
import {schema} from '../singup/UserSignup.validation';
import {GlobalContext} from '../../../../pages/_app';

const inputsInit = {
    email: '',
    password: '',
    name: '',
    passwordConfirm: '',
};

export default function SignUpPage({signupModalVisible, onclick}) {
    const router = useRouter();

    const {setLoginVisible} = useContext(GlobalContext);

    const [createUser] =
        useMutation<Mutation, MutationCreateUserArgs>(CREATE_USER);
    //   useMutation<Mutation, MutationCreateUserArgs>(CREATE_USER);

    const [on, setOn] = useState(false);
    const [input, setInput] = useState({
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
    });

    const [inputs, setInputs] = useState(inputsInit);
    const [errors, setErrors] = useState({
        email: '이메일은 필수 입력입니다.',
        password: '비밀번호는 필수 입력입니다.',
        name: '이름은 필수 입력입니다.',
        passwordConfirm: '비밀번호는 필수 입력입니다.',
    });

    console.log(errors);
    const onChangeInput = async (e) => {
        const newInputs = {
            ...inputs,
            [e.target.name]: e.target.value,
        };
        setInputs(newInputs);
        await schema
            .validate(newInputs, {abortEarly: false})
            .then(() => setErrors({...inputsInit}))
            .catch((error) => {
                const newErrors = {...inputsInit};
                error.errors.forEach((message) => {
                    newErrors[message.split(':')[0]] = message.split(':')[1];
                });
                setErrors(newErrors);
            });
    };

    const onClickSignUp = () => {
        if (Object.values(errors).join('') !== '') {
            alert('입력 정보가 올바르지 않습니다.');
            return;
        }
        handleClickCreatUser();
        // onClickSwitchOn();
    };

    const onClickSwitchOn = () => {
        setOn(true);
    };

    const onClickSwitchOff = () => {
        setOn(false);
        // 회원가입 모달 꺼짐
        onclick();
        // 회원가입 창 꺼짐
        setLoginVisible(true);
    };

    const handleClickCreatUser = async () => {
        try {
            console.log('실행');
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: inputs.email,
                        name: inputs.name,
                        password: inputs.password,
                    },
                },
            });
            if (result.data.createUser._id) {
                setOn(true);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const handleInput = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // const handleOk = () => {
    //     handleClickCreatUser();
    //     onClickSwitchOn();
    // };

    console.log(errors);
    return (
        <>
            {signupModalVisible && (
                <SignUpUI
                    onclick={onclick}
                    // handleOk={handleOk}
                    onClickSwitchOff={onClickSwitchOff}
                    on={on}
                    onChangeInput={onChangeInput}
                    errors={errors}
                    onClickSignUp={onClickSignUp}
                />
            )}
        </>
    );
}
