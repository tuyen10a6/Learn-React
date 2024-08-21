import React from 'react'
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(1)
    useEffect(() => {
        console.log('count:', count)

        return () => {
            console.log('clean up:', count)
        }
    }, [count])

    return (<div style={{textAlign: 'center'}} className={'app-name'}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>onClick</button>
    </div>)
}

export default App;