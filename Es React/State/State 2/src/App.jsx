import { Counter } from "./Components/Counter";

export function App() {
  return (
    <div>
      <h1>Welcome to this totally awesome counter!</h1>
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  )
}
export default App