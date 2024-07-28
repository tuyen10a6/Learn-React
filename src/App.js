import {useState} from "react";


function App() {
    const gifts = [
        'Iphone 15 ProMax',
        'Iphone 14 ProMax',
        'Macbook Pro M1 2020 13 inch'
    ];
    const [gift, setGifts] = useState('')
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGifts(gifts[index]);
    };
  return (
    <div style={{padding: 32}}>
          <h1>{gift !== '' ? gift : 'Chưa có phần thưởng'}</h1>
           <button onClick={randomGift}> Chọn quà</button>
    </div>
  );
}

export default App;
