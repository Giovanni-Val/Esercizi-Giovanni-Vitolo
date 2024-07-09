export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name)
    }

    const handleImageClick = (event) => {
        event.stopPropagation();
        console.log(event.target.src);
    };


    return (

        <button name="one" onClick={handleButtonClick}>
            <img src="./src/img/8484-greensmalldot.png"
                alt="Click me"
                onClick={handleImageClick}></img>
            Click me!
        </button>
    )
}