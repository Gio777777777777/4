import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={increment}> plus </button>
            <button onClick={decrement}> minus </button>
        </div>
    );
};

export default Counter;
