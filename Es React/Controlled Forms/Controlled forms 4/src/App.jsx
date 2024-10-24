import { Login } from "./Components/Login";

export const App = () => {
    const handleLogin = (loginData) => {
        console.log('Login effettuato con successo:', loginData);
    };

    return (
        <div>
            <h1>Login</h1>
            <Login onLogin={handleLogin} />
        </div>
    );
};
