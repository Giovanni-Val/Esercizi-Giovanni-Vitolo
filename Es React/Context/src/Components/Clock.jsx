import { useState, useEffect, useContext } from 'react';
import './Clock.scss';
import { LanguageContext } from './LanguageContext';

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getCurrentTimeMessage = () => {
        switch (language) {
            case 'es':
                return 'Hora actual: ';
            case 'fr':
                return 'Heure actuelle: ';
            case 'it':
                return 'Ora attuale:'
            default:
                return 'Current (Awesome) Time: ';
        }
    };

    return (
        <div className='clockContainer'>
            <h2 className='clockTitle'>{getCurrentTimeMessage()}{currentTime}</h2>
        </div>
    );
};
