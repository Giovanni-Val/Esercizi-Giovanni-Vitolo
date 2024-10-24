import { useState, useEffect } from 'react';
import './Clock.scss';

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='clockContainer'>
            <h2 className='clockTitle'>Current (Awesome) Time: {currentTime}</h2>
        </div>
    );
};
