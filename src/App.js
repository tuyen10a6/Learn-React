import React from 'react'
import {useEffect, useState} from "react";


function App() {
    const [value, setValue] = useState(180)
    useEffect(() => {
        setTimeout(() => {
            setValue(value - 1)
            console.log('value', value)
        }, 1000)
    }, [value])
    return (<div className={'app'}>
        {value}
    </div>)
}

export default App;