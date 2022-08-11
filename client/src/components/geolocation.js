import React from 'react'
import useGeolocation from "../utils/useGeolocation";

export default function Geolocation() {
    const location = useGeolocation();

    return (
        <div className="geolocation">
            <h3>Geolocation</h3>
            <br />
            <h5 className='m-4'>Your Latitude: 
                {
                    location.loaded ? JSON.stringify(location.coordination.lat) : "Location data not available."
                }
            </h5>
            <h5 className='m-4'>Your Longitude:  
                {
                    location.loaded ? JSON.stringify(location.coordination.lng) : "Location data not available."
                }
            </h5>
        </div>
    )
}
