import React from 'react';
import {useState} from "react";
import Content from './Content'

function App(key) {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [listData, setListData] = useState(() => {
        const storageData = JSON.parse(localStorage.getItem('listData'));
        console.log(storageData);
        if (storageData && storageData.length > 0) {
            return storageData;
        } else {
            return [];
        }
    });
    const changeValue = (event) => {
        setValue(event.target.value);
    }

    const addItem = () => {
        if (value.trim() !== '') {
            setListData((prevState) => {
                localStorage.setItem('listData', JSON.stringify([...prevState, value]));
                return [...prevState, value]
            })

            setValue('');
        } else {
            return alert('vui long nhap gia tri')
        }
    }

    const removeItem = (index) => {
        const newList = listData.filter((item, i) => i !== index)
        localStorage.setItem('listData', JSON.stringify(newList));
        setListData(newList)
        return newList
    }
    return (<div style={{textAlign: 'center', marginTop: "30px"}} className={'root'}>
        <input onChange={changeValue} value={value} type="text"/>
        <br/>
        <button onClick={addItem} style={{marginTop: "20px"}} className={'btn btn-submit'}>
            ONCLICK
        </button>
        <div className={'list-data'}>
            <ul>
                {listData.map((item, index) => (<li style={{listStyle: "none"}} key={index}>
                    {item}
                    <span onClick={() => removeItem(index)} style={{marginLeft: '15px'}}>X</span>
                </li>))}
            </ul>
        </div>
        <button onClick={() => {
            setShow(!show);
        }}> Toogle
        </button>
        {
            show && <Content/>
        }
    </div>)
}

export default App;
