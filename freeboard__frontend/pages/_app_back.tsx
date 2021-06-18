// import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
// import '../styles/globals.css'
// import {onError} from "@apollo/client/link/error"
// import Layout from  '../src/commons/layout/index'
// // import Header from '../src/commons/layout/header/LayoutHeader.container';
// import {createUploadLink} from 'apollo-upload-client'
// import {createContext, useState} from "react"
// import axios from 'axios'

// export const GlobalContext = createContext({
//     accessToken : "",
//     setAccessToken : (_) => {},
// })

// function MyApp ({ Component, pageProps }) {

//     const [accessToken, setAccessToken] = useState("");

//     const uploadLink = createUploadLink({
//         uri : "http://backend.codebootcamp.co.kr/graphql",
//         headers : {authorization : `Bearer ${accessToken}`},
//         credentials : 'include'
//     });

//     //@ts-ignore
//     const errorLink = onError(async ({graphQLErrors, operation, forward}) => {

//         if(graphQLErrors){
//             for(let err of graphQLErrors){
//                 if(err.extensions.code === "UNAUTHENTICATED"){
//                     //* 만료된 토큰을 재발급 받기
//                     const response = await axios.post(
//                         "http://backend.codebootcamp.co.kr/graphql",
//                         {
//                             query : `
//                                 mutation restoreAccessToken {
//                                     restoreAccessToken{
//                                         accessToken
//                                     }
//                                 }
//                             `
//                         },
//                         {
//                             headers : {"Content-Type" : 'application/json'},
//                             withCredentials : true,
//                         }
//                     )
//                     const newAccessToken = response.data.data.restoreAccessToken.accessToken
//                     setAccessToken(newAccessToken)
//                     //* 재발급 받은 토큰으로 실패했던 쿼리 다시 보기
//                     operation.setContext({
//                         headers : {
//                             ...operation.getContext().headers,
//                             authorization : `Bearer ${newAccessToken}`
//                         }
//                     })
//                     return forward(operation)
//                 }
//             }
//         }
//     })

//     const clinet = new ApolloClient({
//         //@ts-ignore
//         link : ApolloLink.from([errorLink, uploadLink]),
//         cache: new InMemoryCache()
//     });

//     return (
//         <GlobalContext.Provider value={{accessToken, setAccessToken}}>
//             <ApolloProvider client={clinet}>
//                 <Layout>
//                     <Component {...pageProps} />
//                 </Layout>
//             </ApolloProvider>
//         </GlobalContext.Provider>
//     )
// }

// export default MyApp
