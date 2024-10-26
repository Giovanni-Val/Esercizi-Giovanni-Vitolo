import { useState } from 'react';
import { useGitUser } from './useGitUser';

export const FetchUser = () => {
  const [inputValue, setInputValue] = useState('');
  const { fetchUserData, userData, error, loading } = useGitUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Inserire il nome utente"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>Errore: {error}</p>}
      {loading && <p>Caricamento in corso...</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`Avatar di "${userData.login}"`} width="100" height="100" />
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
        </div>
      )}
    </div>
  );
};
