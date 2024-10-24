import React from 'react';
import { Welcome } from './Components/Welcome';


const App = () => {
  return (
    <div>
      <Welcome name="Johnny" age="47" />
      
      <Welcome />      
    </div>
  );
};

export default App;
