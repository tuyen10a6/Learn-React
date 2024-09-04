import React from 'react';

function Content({onIncrease}) {
    console.log('render')
    return (
        <div>
            <h2> HELLO ANH EM CHELSEA FC</h2>
            <button onClick={onIncrease}> CLICK ME</button>
        </div>
    )
}

export default React.memo(Content);

