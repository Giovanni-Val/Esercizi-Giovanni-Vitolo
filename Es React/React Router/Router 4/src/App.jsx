import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Counter } from './Components/Counter';
import { GithubUser } from './Components/FetchUser';

export const App = () => {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/users/octocat">Github User</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Giovanni" />} />
        <Route path="/counter" element={<Counter initialValue={0} incrementAmount={3} />} />
        <Route path='/users/:username' element={<GithubUser />} />
        
      </Routes>
    </Router>
  );
};