import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState} from 'react';
import CommentUI from './Comment.presenter';
import {CREATE_USEDITEM_QUESTION} from './Comment.queries';

export default function Comment() {
    const router = useRouter();

    const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

    const [input, setInput] = useState({
        user: '',
        contents: '',
        createdAt: '',
    });

    const handeChangeInput = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return <CommentUI handeChangeInput={handeChangeInput}></CommentUI>;
}
