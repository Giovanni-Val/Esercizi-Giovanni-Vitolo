import { useState } from "react"

export function Counter() {

    const [count, setCount] = useState(0);

    function handleCountIncrease() {
        setCount(prevCounter => prevCounter + 1);
    }

    return (
        <div>
            <h2>The count has reached: {count}</h2>
            <button onClick={handleCountIncrease}>Increase!</button>
        </div>
    )
}