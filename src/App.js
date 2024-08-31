import React, {useEffect, useRef, useState} from 'react';

function App() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const ref = useRef(null);
    const object = {
        current: 0
    }

    useEffect(() => {
        ref.current.focus();
    }, []);


    const handleClick = () => {
        setCount(prev => prev + 1);
        countRef.current = countRef.current + 1;
        object.current = object.current + 1;
    }
    console.log(ref)

    console.log('count:' + count, 'countRef: ' + countRef.current, 'object.current:' + object.current);
    return (<div>
            <input type="text" ref={ref}/>
            <button onClick={handleClick}>CLICK</button>
            <p>{countRef.current}</p>
        </div>
    )
}

export default App;