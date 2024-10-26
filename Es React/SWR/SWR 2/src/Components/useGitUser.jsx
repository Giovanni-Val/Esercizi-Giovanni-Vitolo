import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Utente non trovato');
  }
  return res.json();
});

export const useGitUser = (username) => {
  const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

  return {
    userData: data,
    error: error ? error.message : null,
  };
};
