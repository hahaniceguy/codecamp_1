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
});

function MyApp({Component, pageProps}) {
    const [token, setToken] = useState('');
    const uploadLink = createUploadLink({
        uri: 'http://backend.codebootcamp.co.kr/graphql',
    });

    const clinet = new ApolloClient({
        //@ts-ignore
        link: ApolloLink.from([uploadLink]),
        headers: {authorization: `bearer ${token}`},
        cache: new InMemoryCache(),
    });

    return (
        <GlobalContext.Provider value={{setToken, token}}>
            <ApolloProvider client={clinet}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </GlobalContext.Provider>
    );
}

export default MyApp;
