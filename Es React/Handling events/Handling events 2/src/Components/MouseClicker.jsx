export const MouseClicker = () => {

  const handleClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    console.log(event.target.src);
  };

  return (
    <div>

      <button name="one" onClick={handleClick} style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="src\assets\img.jpg"
          alt="icon"
          onClick={handleImageClick}
          style={{ marginRight: '8px' }}
        />
        Cliccami, Forza!
      </button>
    </div>
  );
};
