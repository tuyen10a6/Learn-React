import React, {useMemo, useState} from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [data, setData] = useState([]);
    const handleSubmit = () => {
        console.log('handle submit')
        setData([...data, {
            name: name,
            price: parseInt(price)
        }])
    }

    // tránh lặp lại 1 logic không cần thiết khi component re-render
    const total = useMemo(() => {
        const result = data.reduce((result, product) => {
            console.log('total sum')
            return result + product.price
        }, 0)
        return result;
    }, [data])

    return (
        <div className={'app-name'}>
            <input placeholder='Họ tên' onChange={(e) => setName(e.target.value)} type='text'/>
            <input placeholder='Giá tiền' onChange={(e) => setPrice(e.target.value)} type='text'/>
            <p>total: {total}</p>
            <button onClick={handleSubmit}>
                add data
            </button>
            <ul>
                {data && data.length > 0 ? data.map((item, index) =>
                    <li key={index}>
                        {item.name}: {item.price}
                    </li>
                ) : 'null'}
            </ul>
        </div>
    )
}

export default App;