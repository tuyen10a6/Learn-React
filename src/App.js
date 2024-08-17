import Content from './Content'
import {useState} from "react";
import {useEffect} from "react";


const tabs = ['posts', 'comments', 'albums']

function App() {
    const [title, setTilte] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts');
    useEffect(() => {
        console.log(type)
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [type])

    return (
        <div style={{textAlign: 'center'}}>
            {tabs.map(tab => (<button style={type === tab ? {color: "blue"} : {}} onClick={() => setType(tab)}
                                      key={tab}>{tab} </button>))}
            <ul>
                {posts.map((item, index) => (
                    <li key={index}> {item.title || item.name}</li>
                ))}
            </ul>
        </div>)

}

export default App;
