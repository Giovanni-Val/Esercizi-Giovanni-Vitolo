import { useEffect, useState } from 'react';

export const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        const url = (`https://api.github.com/users/${username}`)
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Utente non trovato');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [username]);

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (!userData) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt={`Avatar di "${userData.login}"`} width="100" height="100" />
      <h2>{userData.name}</h2>
      <p>@{userData.login}</p>
    </div>
  );
}
