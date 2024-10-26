import useSWR, { mutate } from 'swr';

const fetcher = (url) => 
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('User not found');
    }
    return res.json();
  });

export const useGitUser = (username) => {
  const { data, error, isValidating } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetch = () => {
    if (username) {
      mutate(`https://api.github.com/users/${username}`, null, { revalidate: true });
    }
  };

  return {
    userData: data,
    error: error ? error.message : null,
    isLoading: !error && !data && isValidating,
    refetch,
  };
};
