import { useState } from 'react';
import { GithubUser } from './FetchUser';

export const GithubUsers = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = (submit) => {
        submit.preventDefault();

        if (!username.trim()) {
            setError('Please enter a username.');
            return;
        }
        if (users.includes(username)) {
            setError('This username has already been added.');
            return;
        }

        setUsers((prevUsers) => [...prevUsers, username.trim()]);
        setUsername('');
        setError(null);
    };

    return (
        <div>
            <h1>Github User Search</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(user) => setUsername(user.target.value)}
                    placeholder="Inserire il nome utente"
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {users.map((name) => (
                    <li key={name}>
                        <GithubUser username={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
