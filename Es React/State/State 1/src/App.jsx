import { Counter } from "./Components/Counter";

export const App() {
  return (
    <div>
      <h1>Welcome to this totally awesome counter!</h1>
      <Counter initialValue={0} incrementAmount={3} />
    </div>
  )
}
