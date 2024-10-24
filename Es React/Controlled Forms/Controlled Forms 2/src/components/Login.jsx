import { useState } from 'react';

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    return (
        <div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(username) => setUsername(username.target.value)}
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
            <button type="submit">Login</button>
        </div>
    );
};
