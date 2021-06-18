import {useMutation} from '@apollo/client';
import {useEffect, useState, useRef} from 'react';
import QueryWriteUI from './QueryWrite.presenter';
import {useRouter} from 'next/router';
import {CREATE_PROFILE} from './QueryWrite.queries';

// function Query() {
const QueryWrite = () => {
  const router = useRouter();
  const [createProfile] = useMutation(CREATE_PROFILE);
  const [profile, setProfile] = useState({
    name: 0,
    age: 2,
    school: 3,
  }); 
  const [aaa, setAaa] = useState(false);

  let count: number;

  const onChangeInput = (event) => {
    const newProfile = {...profile, [event.target.name]: event.target.value};
    if (newProfile.name && newProfile.age && newProfile.school) setAaa(true);
    setProfile(newProfile);

    // profile.aaa.bbb.ccc => "철수"

    // const profile = {
    //     aaa: {
    //         bbb: {
    //             ccc: "철수"
    //         }
    //     }
    // }
  };

  // async function aaa(){
  // }

  useEffect(() => {

    inputRef.current.focus()
    setTestState('asdf')
    console.log('useEffect가 실행되었습니다.')
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)

  const [testState, setTestState] = useState('aaa')
  const [ccc, setCcc] = useState(123)

  const handleChangeCcc = () => {
      setCcc(456)
  }

  console.log('11111111111111111111')

  const onClickSubmit = async () => {
    try {
      const result = await createProfile({
        variables: {
          ...profile,
          age: Number(profile.age),
        },
      });
      alert(result.data.createProfile.message);
      router.push(`/query/${profile.name}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <QueryWriteUI
        handleChangeCcc={handleChangeCcc}
        inputRef={inputRef}
        onClickSubmit={onClickSubmit}
        onChangeInput={onChangeInput}
        aaa={aaa}
    />
  );
};

export default QueryWrite;
