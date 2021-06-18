import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink} from '@apollo/client'
import GlobalStyles from '../src/commons/styles/globalStyles'
import Layout from '../src/commons/layout/Layout.container'
import {createUploadLink} from 'apollo-upload-client'
import { createContext, useState } from 'react';

export const GlobalContext = createContext({
    accessToken : "",
    setAccessToken : (_) => {},
    setUserInfo: (_: String) => {}
})
function MyApp ({ Component, pageProps }) {

    const [accessToken, setAccessToken] = useState("");

    const [userInfo, setUserInfo] = useState({})

    const uploadLink = createUploadLink({
        uri : "http://backend.codebootcamp.co.kr/graphql",
        headers : {authorization : `Bearer ${accessToken}`},
        credentials : 'include'
    });

    const client = new ApolloClient({
        //@ts-ignore
        link : ApolloLink.from([errorLink, uploadLink]),
        cache: new InMemoryCache()
    });


//   const client = new ApolloClient({
//     // uri: 'http://backend.codebootcamp.co.kr/graphql',
//     link : ApolloLink.from([createUploadLink as unknown as ApolloLink]),
//     cache: new InMemoryCache(),
//   })

    return (
        <GlobalContext.Provider value={{accessToken, setAccessToken, setUserInfo}}>
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </GlobalContext.Provider>
    )
}

export default MyApp
