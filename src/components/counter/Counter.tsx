import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleClick = () => {
        setCount(amount);
        setAmount(0);
    };



    return (
        <div>
            <h1>Input Testing Counter</h1>
            <h2 className='counter'>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br />
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={handleClick}>Set Number</button>
        </div>
    );
};

export default Counter;




