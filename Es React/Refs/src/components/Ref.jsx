import { useEffect, useState, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef("");
    const prevCounterRef = useRef(initialValue);

    useEffect(() => {
        if (counter > prevCounterRef.current && directionRef.current !== "up") {
            directionRef.current = "up";
            console.log(directionRef.current);
        } else if (counter < prevCounterRef.current && directionRef.current !== "down") {
            directionRef.current = "down";
            console.log(directionRef.current);
        }
        prevCounterRef.current = counter;
    }, [counter]);

    function counterIncrement() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function counterDecrement() {
        setCounter(prevCounter => prevCounter - 1);
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
