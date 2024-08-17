import React from 'react';
import {useState} from "react";

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
    const [course, setCourse] = useState([]);

    const chooseCourse = (id) => {
        setCourse((prevCourse) => {
            const isCheck = course.includes(id);
            if (isCheck) {
                return course.filter(item => item !== id)
            } else {
                return [...prevCourse, id];
            }
        })
    }
    console.log(course);
    return (
        <div style={{textAlign: 'center'}}>
            {courses.map((item, index) => (<div key={index}>
                <input
                    checked={course.includes(item.id)}
                    onChange={() => chooseCourse(item.id)}
                    type='checkbox'/>
                {item.name}
            </div>))}
            <div>
                <button onClick={() => {
                    console.log('id course: ', course);
                }}> log course
                </button>
            </div>
        </div>
    )
}

export default App;
