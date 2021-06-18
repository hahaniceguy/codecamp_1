import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import '../styles/globals.css';
import Layout from '../src/commons/layout/Layout.container';
// import {creatUploadlink} from 'apollo-upload-client'

function MyApp({Component, pageProps}) {
  const clinet = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={clinet}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
