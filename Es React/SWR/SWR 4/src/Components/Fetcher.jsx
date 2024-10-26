export const fetcher = async (url) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Errore: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw new Error(`Errore nella fetch: ${error.message}`);
    }
  };
  