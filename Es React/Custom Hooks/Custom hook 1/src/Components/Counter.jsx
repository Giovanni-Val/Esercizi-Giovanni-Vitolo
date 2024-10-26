import { useCounter } from './useCounter';

export const CounterDisplay = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Aumenta</button>
            <button onClick={decrement}>Diminuisci</button>
            <button onClick={reset}>Resetta</button>
        </div>
    );
}
