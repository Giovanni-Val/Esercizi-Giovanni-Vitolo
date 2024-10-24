import { useEffect, useRef } from 'react';

export const Componente = () => {
    const hasMounted = useRef(false);

    useEffect(() => {
        if (!hasMounted.current) {
            console.log('Se vedi questo messaggio due volte, qualcosa non funziona');
            hasMounted.current = true;
        }
    }, []);

    return (
        <div>
            <h1>Leggi la console.</h1>
        </div>
    );
}
