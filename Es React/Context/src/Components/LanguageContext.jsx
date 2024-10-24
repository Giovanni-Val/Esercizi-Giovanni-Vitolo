import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const translateTitle = () => {
        switch (language) {
            case 'es':
                return "¡El reloj más asombroso de todos!";
            case 'fr':
                return "L'horloge la plus géniale du monde!";
            case 'it':
                return "L'orologio più incredibile che ci sia!"
            default:
                return "The most awesome clock 'round!";
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, translateTitle }}>
            {children}
        </LanguageContext.Provider>
    );
};
