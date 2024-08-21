import React from 'react'
import {useEffect, useState} from "react";

const lession = [
    {
        'id': 1,
        'name': 'PHP ( Laravel)'
    },
    {
        'id': 2,
        'name': 'Javascript (React)'
    },
    {
        'id': 3,
        'name': 'Node.js'
    }
]

function App() {
    const [lessionId, setLessionId] = useState(1);
    return (
        <div className={'app-name'}>
            <ul>
                {lession.map(item => (
                    <li onClick={() => setLessionId(item.id)}
                        style={{color: lessionId === item.id ? 'red' : 'black'}} key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;