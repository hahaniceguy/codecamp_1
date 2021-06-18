import QueryDetailUI from './QueryDetail.presenter';
import {aaa} from './QueryDetail.queries';
import {useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {RegisterButton} from '../write/QueryWrite.styles';

interface IFetchProfile {
  data: {
    fetchProfile: {
      number: number;
      name: string;
      age: number;
      school: string;
    };
  };
}

const QueryDetail = () => {
  const router = useRouter();

  const {data}: IFetchProfile = useQuery(aaa, {
    variables: {aaa: router.query.name},
  });

  return <QueryDetailUI data={data} />;
};

export default QueryDetail;
