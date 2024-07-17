import Color from "./components/Color"
import Colors from "./components/Colors"

export function App() {

  const colorsArray =
    [
      { id: 1, name: "Red" },
      { id: 2, name: "Blue" },
      { id: 3, name: "Green" },
      { id: 4, name: "Yellow" },
      { id: 5, name: "Purple" }
    ]



  return (

    <div>
      <ul>
          <Color color={{id: 6, name: "Orange"}} ></Color>
          <Colors colors={colorsArray}></Colors>
      </ul>
    </div>
  )
}

export default App