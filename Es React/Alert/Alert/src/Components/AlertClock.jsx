export function AlertClock() {

    function GetTime() {
        const time = new Date();
        alert(`The current time is ${time.toLocaleTimeString()}`);
    }

    return (
        <div>
            <p>Click the button below to get the current time:</p>
            <button onClick={GetTime}>Click me for time!</button>
        </div>
    )
} 