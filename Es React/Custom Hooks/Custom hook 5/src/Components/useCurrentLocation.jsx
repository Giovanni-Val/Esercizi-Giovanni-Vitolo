import { useState } from 'react';

export const useCurrentLocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getCurrentLocation = () => {
      setLoading(true);
      setError(null);
  
      if (!navigator.geolocation) {
        setError('La geolocalizzazione non è supportata o abilitata in questo browser.');
        setLoading(false);
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
    };
  
    return { location, getCurrentLocation, error, loading };
  };
