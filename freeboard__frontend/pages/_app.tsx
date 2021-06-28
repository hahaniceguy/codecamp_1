import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client';
import '../styles/globals.css';
import Layout from '../src/commons/layout/index';
import {createUploadLink} from 'apollo-upload-client';
import 'antd/dist/antd.css';
import {useState} from 'react';
import {createContext} from 'react';

export const GlobalContext = createContext({
    setToken: (_: string) => {},
    token: '',
    loginVisible: false,
    setLoginVisible: (_: boolean) => {},
});

function MyApp({Component, pageProps}) {
    const [token, setToken] = useState('');
    const [loginVisible, setLoginVisible] = useState(false);
    const uploadLink = createUploadLink({
        uri: 'https://backend.codebootcamp.co.kr/graphql',
        // headers: {authorization: `Bearer ${token}`},
        headers: {
            authorization:
                'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkOGFhNDYyNzA2MjAwMjkxMTA4MzMiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjQ3MDcyNjgsImV4cCI6MTYyNDcxMDg2OCwic3ViIjoiYWNjZXNzVG9rZW4ifQ.hrDEDNMNCOrODyBOY3EHul1MTcFsY2sq_1qm5-qBVRpBDUcep9hHJd0HPdcQARPW7cCCS-8DuX4hUazx6wAasQ',
        },
        credentials: 'include',
    });

    console.log(token);
    const clinet = new ApolloClient({
        //@ts-ignore
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    });

    return (
        <GlobalContext.Provider
            value={{setToken, token, loginVisible, setLoginVisible}}
        >
            <ApolloProvider client={clinet}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </GlobalContext.Provider>
    );
}

export default MyApp;
