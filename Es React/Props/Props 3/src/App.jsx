import React from 'react';
import { Welcome } from './Components/Welcome';


const App = () => {
  return (
    <div>
      <Welcome name="Johnny" age="47" />
      
      {/*Richiamando Welcome senza valori per le Prop, verranno visualizzati i valori di default*/}
      <Welcome />      
    </div>
  );
};

export default App;
