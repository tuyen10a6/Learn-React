import React, {useEffect} from 'react';
import {useState, useRef} from "react";

function App() {
    const [count, setCount] = useState(60);
    const timeId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count]);
    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log(timeId)
    }

    const handleStop = () => {
        console.log(timeId)
        clearInterval(timeId.current)
    }
    console.log(count, prevCount.current)
    return (
        <div style={{padding: '20px'}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default App;