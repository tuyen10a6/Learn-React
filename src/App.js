import Content from './Content'
import {useState} from "react";
import {useEffect} from "react";

function App() {

    const [value, setValue] = useState('');

    useEffect(() => {
       document.title = value;
    })
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} type='text'/>
        </div>
    )
}

export default App;
