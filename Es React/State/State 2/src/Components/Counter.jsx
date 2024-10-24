import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Counter = ({ initialValue, incrementAmount }) => {

    const [counter, setCounter] = useState(initialValue);

    function counterIncrement() {
        setCounter(prevCounter => prevCounter + incrementAmount);
    }

    function counterDecrement() {
        setCounter(prevCounter => prevCounter - incrementAmount);
    }

    function counterReset() {
        setCounter(initialValue);
    }

    return (
        <div>
            <CounterDisplay count={counter}></CounterDisplay>
            <button onClick={counterIncrement}>Click me +!</button>
            <button onClick={counterDecrement}>Click me -!</button>
            <button onClick={counterReset}>Reset me!</button>
        </div>
    );
}

export default Counter;