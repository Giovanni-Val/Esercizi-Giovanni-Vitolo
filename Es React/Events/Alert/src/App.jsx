import { AlertClock } from "./Components/AlertClock";

export const App = () => {

  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div className="App">
      <h1>Alert Clock</h1>
      <AlertClock onButtonClick={handleButtonClick} />
    </div>
  )
}