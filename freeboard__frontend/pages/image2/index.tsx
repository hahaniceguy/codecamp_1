import {useMutation, gql} from '@apollo/client';
import {useRef, useState} from 'react';
import {getStorageUrl} from '../../src/commons/types/libraries/utils';
import {checkImage} from '../../src/commons/types/libraries/validations';
import LazeLoad from 'react-lazy-load';
// import {IMutation, IMutationUploadFileArgs} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Image2Page = () => {
  const [fileUrl, setFileUrl] = useState('');

  const [uploadFile] =
    // useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_FILE)
    useMutation(UPLOAD_FILE);
  const aaaRef = useRef<HTMLInputElement>();

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    if (!checkImage(file)) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setFileUrl(String(event.target.result));
      // console.log(event.target.result)
    };

<<<<<<< Updated upstream
    // try{
    //     const {data} = await uploadFile({ variables: {file} });
    //     //state에 저장
    //     setFileUrl(getStorageUrl(data.uploadFile.url));
    // }catch (error) {
    //     alert(error.message)
    // }
=======
    try {
      const {data} = await uploadFile({variables: {file}});
      //state에 저장
      setFileUrl(getStorageUrl(data.uploadFile.url));
    } catch (error) {
      alert(error.message);
    }
>>>>>>> Stashed changes
  };

  const onClickUpload = () => {
    aaaRef.current?.click();
  };

  return (
    <>
      <button onClick={onClickUpload}>업로드!!</button>
      <input
        ref={aaaRef}
        type="file"
        onChange={onChangeFile}
        style={{display: 'none'}}
      />
      <LazeLoad>
        <img src={fileUrl} height={300} width={300} />
      </LazeLoad>
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
      <img src={fileUrl} height={300} width={300} />
    </>
  );
};

export default Image2Page;
