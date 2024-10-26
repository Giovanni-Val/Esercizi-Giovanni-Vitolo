import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Counter } from './Components/Counter';
import { GithubUser } from './Components/FetchUser';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Giovanni" />} />
        <Route path="/counter" element={<Counter initialValue={0} incrementAmount={3} />} />
        <Route path='/users/:username' element={<GithubUser />} />
      </Routes>
    </Router>
  );
};