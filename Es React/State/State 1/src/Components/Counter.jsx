import { useState } from "react";

export const Counter = ({ initialValue, incrementAmount }) => {

    const [counter, setCounter] = useState(initialValue);

    /* Usare un parametro di funzione nel setter è una prassi consigliata in React
    per garantire aggiornamenti di stato affidabili e accurati, specialmente durante interazioni utente rapide. */
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
