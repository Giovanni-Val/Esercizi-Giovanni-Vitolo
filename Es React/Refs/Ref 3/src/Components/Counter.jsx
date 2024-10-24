import { useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Counter = ({ initialValue, incrementAmount }) => {
    const [counter, setCounter] = useState(initialValue);
    const countDirectionRef = useRef(null);

    const printDirection = (newDirection) => {
            countDirectionRef.current = newDirection;
            console.log("Direction:", newDirection);
    };

    function counterIncrement() {
        setCounter((prevCounter) => {
            const newCounter = prevCounter + incrementAmount;
            if (newCounter > prevCounter) {
                printDirection("up");
            }
            return newCounter;
        });
    }

    function counterDecrement() {
        setCounter((prevCounter) => {
            const newCounter = prevCounter - incrementAmount;
            if (newCounter < prevCounter) {
                printDirection("down");
            }
            return newCounter;
        });
    }

    function counterReset() {
        setCounter(initialValue);
        printDirection("reset");
    }

    return (
        <div>
            <CounterDisplay count={counter}></CounterDisplay>
            <button onClick={counterIncrement}>Click me +!</button>
            <button onClick={counterDecrement}>Click me -!</button>
            <button onClick={counterReset}>Reset me!</button>
        </div>
    );
};

export default Counter;
