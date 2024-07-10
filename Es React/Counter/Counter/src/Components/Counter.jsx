import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export function Counter({ }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(`Counter value is: ${counter}`)
    }, [counter])

    function counterIncrement() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function counterDecrement() {
        setCounter(prevCounter => prevCounter - 1);
    }

    function counterReset() {
        setCounter(0);
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