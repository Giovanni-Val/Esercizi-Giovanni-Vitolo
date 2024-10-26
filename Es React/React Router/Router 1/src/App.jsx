import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Giovanni" />} />
      </Routes>
    </Router>
  );
};