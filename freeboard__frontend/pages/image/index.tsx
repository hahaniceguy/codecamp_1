import {useState} from 'react';

const ImagePage = () => {
    const [myImage, setMyIamge] = useState('');

    const onChangeFile = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            setMyIamge(String(event.target.result));
        };
    };
    console.log(myImage, 'img');

    return (
        <div>
            <input type="file" onChange={onChangeFile} />
            <img src={myImage} />
        </div>
    );
};

export default ImagePage;
