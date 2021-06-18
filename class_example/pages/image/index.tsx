import { useMutation, gql } from "@apollo/client";
import { Hidden } from "@material-ui/core";
import { useRef, useState } from "react";

const ImagePage = () => {

    const[myImage, setMyIamge] = useState("")
    const fileRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState()

    const UPLOAD_FILE = gql `
        mutation abc($file : Upload!){
            uploadFile(file : $file){
                url
            }
        }
    `

    const [uploadFileMutation] = useMutation(UPLOAD_FILE)

    const onChangeFile = (event) => {
        const file = event.target.files[0]

        if(file.size > 5 * 1024 * 1024){
            alert("파일이 너무 큽니다(5MB 제한!");
            return;
        }

        if(!file.type.includes("png")){
            alert('png 파일만 업로드 가능합니다!')
            return;
        }

        console.log(file);

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            setMyIamge(String(event.target.result));
        }
        setFile(file);
    };

    const onClickImage = () => {
        fileRef.current.click()
    };

    async function onClickSubmit(){
        const result = await uploadFileMutation({
            variables: {
                file : file, 
            }
        })
        console.log(result)
    }

    return (
    <div>
        <button onClick={onClickImage}>이미지를 업로드하는 버튼</button>
        <input type="file" ref={fileRef} onChange={onChangeFile} style={{display: "none"}}/>
        <img src={myImage}/>

        <button onClick={onClickSubmit}>서버에 파일 전송하기</button>
    </div>
    )
};

export default ImagePage;