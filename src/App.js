import React from 'react'
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState(180)
    useEffect(() => {
        const timeId = setTimeout(() => {
            setValue(prevState => {
                console.log('value time: ', prevState - 1)
                return prevState - 1;
            })
        }, 1000)

        return () => clearTimeout(timeId)

    }, [value])
    return (<div className={'app'}>
        {value}
    </div>)
}

export default App;