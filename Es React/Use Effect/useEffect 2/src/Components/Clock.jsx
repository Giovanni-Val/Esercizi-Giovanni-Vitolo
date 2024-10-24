import { useState, useEffect } from 'react';

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Current (Awesome) Time: {currentTime}</h2>
        </div>
    );
};
