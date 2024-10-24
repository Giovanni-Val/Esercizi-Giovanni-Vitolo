import { Hello } from "./Components/Hello";
import { Message } from "./Components/Message";

export const App = () => {

    return (
        <div>
            <Hello />

            {/*  I componenti React sono riutilizzabili e possono essere renderizzati più volte senza problemi */}
            <Hello />

            {/* Il componente Message può essere renderizzato contemporaneamente anche in App senza conseguenze */}
            <Message />
        </div>
    )
}

export default App