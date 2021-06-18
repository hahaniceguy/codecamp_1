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

function MyApp({Component, pageProps}) {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
  });

  const clinet = new ApolloClient({
    //@ts-ignore
    link: ApolloLink.from([uploadLink]),
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
