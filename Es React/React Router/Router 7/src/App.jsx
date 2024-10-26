import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Counter } from './Components/Counter';
import { GithubUser } from './Components/FetchUser';
import { NotFound } from './Components/404';
import { GithubUserList } from './Components/GithubUserList';
import { GithubUserIndex } from './Components/GithubUserIndex';

export const App = () => {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/users">GitHub Users</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Giovanni" />} />
        <Route path="/counter" element={<Counter initialValue={0} incrementAmount={3} />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<GithubUserIndex />} />
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};