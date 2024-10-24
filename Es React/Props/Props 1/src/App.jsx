import React from 'react';
import { Welcome } from './Components/Welcome';


const App = () => {
  return (
    <div>
      <Welcome name="Johnny" />
      
      {/*Richiamando Welcome senza un valore per la Prop, verrà visualizzato il valore di default assegnato nel component*/}
      <Welcome />      
    </div>
  );
};

export default App;
