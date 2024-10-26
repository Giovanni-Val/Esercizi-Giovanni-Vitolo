import { useCurrentLocation } from './useCurrentLocation';

export const DisplayLocation = () => {
    const { location, getCurrentLocation, error, loading } = useCurrentLocation();

    return (
        <div>
            <button onClick={getCurrentLocation}>Ottieni la tua posizione!</button>

            {loading && <p>Caricamento...</p>}

            {error && <p>Errore: {error}</p>}

            {location.latitude !== null && location.longitude !== null && (
                <p>
                    La tua posizione attuale: {location.latitude}, {location.longitude}
                </p>
            )}
        </div>
    );
};