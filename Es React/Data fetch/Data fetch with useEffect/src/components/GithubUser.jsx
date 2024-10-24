import { useState, useEffect } from "react";


export function GithubUser({ username }) {
    const [userData, setUserData] = useState(null);;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUserData(data);
        }
        fetchData();
    }, [username]);

    if (!userData) {
        return null;
    }

    return (
        <div>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="50" />
            <h2>{userData.name}</h2>
            <p>{userData.login}</p>
        </div>
    );
}