import * as yup from 'yup';

export const schema = yup.object().shape({
    password: yup
        .string()
        .min(4, 'password:최소 4글자 이상이어야 합니다.')
        .required('password:비밀번호는 필수 입력입니다.'),
    passwordConfirm: yup
        .string()
        .min(4, 'passwordConfirm:최소 4글자 이상이어야 합니다.')
        .required('passwordConfirm:비밀번호는 필수 입력입니다.'),
    email: yup
        .string()
        .required('email:이메일은 필수 입력입니다.')
        .email('email:이메일을 제대로 입력해 주세요.'),
    name: yup.string().required('name:이름은 필수 입력입니다.'),
});
