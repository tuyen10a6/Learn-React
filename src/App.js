import React from 'react';
import {useEffect} from 'react'
import {useState} from 'react';

const data = [
    {
        'id': '1',
        'name': 'Lập trình cơ bản với PHP'
    },
    {
        'id': '2',
        'name': 'Lập trình cơ bản với PYTHON'
    },
    {
        'id': '3',
        'name': 'Lập trình cơ bản với NodeJS'
    }
]

function App() {
    const [lesson, setLesson] = useState('1');
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lesson}`, handleComment);

        return (() => {
            window.removeEventListener(`lesson-${lesson}`, handleComment);
        })
    }, [lesson])
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li style={{color: item.id === lesson ? 'red' : 'black'}} onClick={() => setLesson(item.id)}
                        key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;