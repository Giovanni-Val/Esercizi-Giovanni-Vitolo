export const MouseClicker = () => {

  const handleClick = (event) => {    
    console.log(event.target.name);
  };

  return (
    <div>

      <button name="one" onClick={handleClick}>
        Cliccami, Forza!
      </button>
    </div>
  );
};
