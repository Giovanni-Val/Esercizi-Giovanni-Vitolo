import { useEffect, useState } from 'react';

export const useGitUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [username]);

  return { userData, error };
};
