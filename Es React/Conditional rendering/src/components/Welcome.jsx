import Age from "./Age";

const Welcome = ({ name = "Guest", age = false }) => {
  return (
    <div><p>Welcome, <strong>{name}</strong>!</p>
      {age !== false && <Age age={age} />}
      {age > 18 && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {name === "John" && age > 18 && age < 65 && <Age age={age} />}
    </div>

  )

};

export default Welcome;