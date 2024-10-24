import { useState } from 'react';

export const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({ username, password, remember });
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRemember(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(Username) => setUsername(Username.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(password) => setPassword(password.target.value)}
                    required
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(remember) => setRemember(remember.target.checked)}
                    />
                    Ricordami
                </label>
            </div>
            {!username || !password ? (
                <button type="button" disabled>
                    Login
                </button>
            ) : (
                <button type="submit">
                    Login
                </button>
            )}
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </form >
    );
};