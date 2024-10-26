import { useState } from "react";

export const Counter = ({ initialValue, incrementAmount }) => {

    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + incrementAmount);
    };

    return (
        <div>
            <h2>Counter Value: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};
