import React from 'react';
import {useState} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const courses = [
        {
            'id': '1',
            'name': 'Lập trình cơ bản với python'
        },
        {
            'id': '2',
            'name': 'Lập trình cơ bản với C#'
        },
        {
            'id': '3',
            'name': 'Lập trình cơ bản với PHP'
        }
    ]
    const [course, setCourse] = useState('2');
    const chooseCourse = (id) => {
        setCourse(id)
    }
    return (
        <div style={{textAlign: 'center'}}>
            {courses.map((item, index) => (<div key={index}>
                <input
                    checked={course === item.id}
                    onChange={() => chooseCourse(item.id)}
                    type='radio'/>
                {item.name}
            </div>))}
            <div>
                <button onClick={() => {
                    console.log( 'id course: ', course);
                }}> log course</button>
            </div>
        </div>
    )
}

export default App;
