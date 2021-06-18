import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {
  Mutation,
  MutationCreateUserArgs,
} from '../../../commons/types/generated/types';
import SignUpUI from './UsedSignup.presenter';
import {CREATE_USER} from './UsedSignup.queries';
import {schema} from '../login/UserLogin.validation';

const inputsInit = {
  email: '',
  password: '',
  name: '',
  repassword: '',
};

export default function SignUpPage({signupMadalVisible, onclick}) {
  const router = useRouter();

  const [createUser] =
    useMutation<Mutation, MutationCreateUserArgs>(CREATE_USER);
  //   useMutation<Mutation, MutationCreateUserArgs>(CREATE_USER);

  const [on, setOn] = useState(false);
  const [input, setInput] = useState({
    email: '',
    name: '',
    password: '',
    repassword: '',
  });

  const [inputs, setInputs] = useState(inputsInit);
  const [errors, setErrors] = useState({
    email: '이메일은 필수 입력입니다.',
    password: '비밀번호는 필수 입력입니다.',
    name: '이름은 필수 입력입니다.',
    repassword: '비밀번호는 필수 입력입니다.',
  });

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
        error.errors.forEacth((message) => {
          newErrors[message.split(':')[0]] = message.split(':')[1];
        });
        setErrors(newErrors);
      });
  };

  const onClickLogin = () => {
    if (Object.values(errors).join('') !== '') {
      alert('입력 정보가 올바르지 않습니다.');
      return;
    }
  };

  const onClickSwitchOn = () => {
    setOn(true);
  };

  const onClickSwitchOff = () => {
    setOn(false);
  };

  const handleClickCreatUser = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: input.email,
            name: input.name,
            password: input.password,
            //   repassword: input.repassword,
          },
        },
      });
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

  const handleOk = () => {
    handleClickCreatUser();
    onClickSwitchOn();
  };

  return (
    <>
      {signupMadalVisible && (
        <SignUpUI
          onclick={onclick}
          handleInput={handleInput}
          input={input}
          handleClickCreatUser={handleClickCreatUser}
          handleOk={handleOk}
          onClickSwitchOff={onClickSwitchOff}
          on={on}
          onChangeInput={onChangeInput}
          errors={errors}
        />
      )}
    </>
  );
}
