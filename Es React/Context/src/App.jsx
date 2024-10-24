import { Clock } from "./Components/Clock";
import { LanguageContext } from "./Components/LanguageContext";
import { useContext } from 'react';

export const App = () => {
  const { changeLanguage, translateTitle } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div>
      <h1>{translateTitle()}</h1>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
      </select>
      <Clock />
    </div>
  );
};