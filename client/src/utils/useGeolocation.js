import { useEffect, useState } from 'react'

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordination: {lat: "", lng: ""}
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordination: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: error.message,
        });
    };

    useEffect(() => {
        if( !("geolocation" in navigator) ) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, []);

    return location;
}

export default useGeolocation;