import React from "react";
import { Welcome } from "./components/Welcome.jsx";

const App = () => {
    return (
        <div>
            <Welcome name="John" age="30" />
            <Welcome name="Mario" age="10" />
            <Welcome name="Marina" age="80" />
            <Welcome name="Giulia" age="19" />
            <Welcome name="Andrea" />
        </div>
    );
};

export default App;