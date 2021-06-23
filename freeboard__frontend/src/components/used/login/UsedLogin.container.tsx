import {useState} from 'react';
import LoginPageUI from './UsedLogin.presenter';

export default function LoginPage({loginVisible, onclick}) {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            {loginVisible && (
                <LoginPageUI
                    onclick={onclick}
                    handleInput={handleInput}
                    input={input}
                />
            )}
        </>
    );
}
