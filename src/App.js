import Content from './Content'
import {useState} from "react";
import {useEffect} from "react";


const tabs = ['posts', 'comments', 'albums']

function App() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts');
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            console.log("ok")
            window.scrollY > 400 ? setShow(true) : setShow(false)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleClickscrollY = () => {
        window.scrollTo(0, 0)
    }

    console.log('scroll')

    return (<div style={{textAlign: 'center'}}>
        {tabs.map(tab => (<button style={type === tab ? {color: "blue"} : {}} onClick={() => setType(tab)}
                                  key={tab}>{tab} </button>))}
        <ul>
            {posts.map((item, index) => (<li key={index}> {item.title || item.name}</li>))}
        </ul>
        {show && (
            <button onClick={handleClickscrollY} style={{
                position: 'fixed',
                bottom: 20,
                right: 20
            }}>
                Show item
            </button>
        )}
    </div>)

}

export default App;
