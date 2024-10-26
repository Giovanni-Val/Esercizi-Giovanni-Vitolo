import useSWR from 'swr';

export const useGitUser = (username) => {
  const { data, error, isValidating } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
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
