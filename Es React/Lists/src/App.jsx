import Color from "./components/Color"
import Colors from "./components/Colors"


export function App() {

  const colorsArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Yellow' },
    { id: 5, name: 'Purple' }
  ];

  return (

    <div>
      <Color color={colorsArray}></Color>
      <Colors></Colors>
    </div>
  )
}

export default App