import React from 'react';
import {useState} from "react";

function ProductItem(props) {
    console.log(props)
    return (
        <div className="item-product-blog">
            <h1> {props.title}</h1>
            <p> {props.productName}</p>
        </div>
    )
}

function App() {
    const [phone, setPhone] = useState([
        'Iphone 15 Promax',
        'Iphone 14 Promax',
        'Iphone 13 Promax'
    ])

    const handleAddPhone = () => {
        setPhone((prevState) => {
            return [...prevState, 'Iphone 12 Promax', 'Iphone 11 Promax']
        })
    }
    return (
        <div>
            <span> {JSON.stringify(phone)} </span>
            <br/>
            <button onClick={handleAddPhone}>CLICK</button>
        </div>
    )
}

export default App;
