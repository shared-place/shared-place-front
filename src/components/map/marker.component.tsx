import React from 'react';
import {MarkerF} from "@react-google-maps/api";


interface MarkerProps {
    position: { lat: number, lng: number }
}

const MarkerComponent = (markerProps: MarkerProps) => {
    return (
        <div>
            <MarkerF position={markerProps.position} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
        </div>
    );
};

export default MarkerComponent;