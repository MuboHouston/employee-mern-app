import React from 'react'
import useGeolocation from "../utils/useGeolocation";

export default function Geolocation() {
    const location = useGeolocation();

    return (
        <div className="geolocation">
            <h3>Geolocation</h3>
            <br />
                {
                    location.loaded ? JSON.stringify(location) : "Location data not available."
                }
        </div>
    )
}
