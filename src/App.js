import React, {useCallback} from 'react';
import {useState} from "react";
import Content from "./Content";

const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [])
    return (
        <div style={{padding: "0px auto"}}>
            <Content onIncrease={handleIncrease}/>
            <p>count: {count}</p>
        </div>
    )
}

export default App;