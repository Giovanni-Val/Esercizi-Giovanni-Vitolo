import { useState, useEffect } from 'react';

function GithubUser({ username }) {
    const [userData, setUserData] = useState(null);

    function handleFetch() {
        useEffect(async () => {
            const response = await fetch("https://api.github.com/users/${username}");
            const data = await response.json();
            const [person] = data.results;
            setUserData(person);
        }, []);
    }



    return (
        <div>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
            <h1>{userData.name}</h1>
            <p>{userData.login}</p>
        </div>
    );
};

export default GithubUser;
