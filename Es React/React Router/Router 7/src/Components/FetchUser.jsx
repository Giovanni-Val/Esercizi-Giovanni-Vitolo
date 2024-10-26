import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GithubUser = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Utente non trovato');
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <img
        src={userData.avatar_url}
        alt={`Avatar di "${userData.login}"`}
        width="100"
        height="100"
      />
      <h2>{userData.name || 'Nome non disponibile'}</h2>
      <p>@{userData.login}</p>
    </div>
  );
};
