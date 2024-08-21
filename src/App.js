import React from 'react'
import {useEffect, useState} from "react";

function App() {


    const [avatar, setAvatar] = useState('');
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleChangeAvatar = (e) => {
        let file = e.target.files[0];
        console.log(URL.createObjectURL(file));
        file.preview = URL.createObjectURL(file);
        setAvatar(file)

    }

    return (<div style={{textAlign: 'center'}} className={'app-name'}>
            <input onChange={handleChangeAvatar} type="file"/>
            <img width={'80px'} src={avatar.preview}/>
        </div>
    )
}

export default App;