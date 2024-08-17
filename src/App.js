import Content from './Content'
import {useState} from "react";
import {useEffect} from "react";

function App() {

    const [value, setValue] = useState('');
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(posts => {
                setPost(posts);
            })
    }, [])
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} type='text'/>
            <ul>
                {post.map((item, index) => (<li key={item.id}>{item.title}</li>))}
            </ul>
        </div>
    )
}

export default App;
