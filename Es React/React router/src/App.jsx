import './App.css'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'
import { Routes, Route } from "react-router-dom";
import { GithubUser } from "./components/GithubUser"

export function App() {


  return (
    <Routes>
      <Route path="/" element={<Welcome name="Giovanni" />}></Route>
      <Route path="/Counter" element={<Counter />}></Route>
      <Route path="/Gituser" element={<GithubUser></GithubUser>}></Route>
    </Routes>

  )
}

