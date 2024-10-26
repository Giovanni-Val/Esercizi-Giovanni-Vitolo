import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Counter } from './Components/Counter';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Giovanni" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};