import React, {useState} from 'react';
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import {config} from "../../config";
import LoaderMapComponent from "./loader-map.component";
import MarkersViewComponent from "./markers-view.component";

const GoogleMapsComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: config.API_KEY_GOOGLE_MAPS,
    });

    const metz = { lat: 49.133333, lng: 6.166667 }
    const [markers, setMarker] = useState([metz]);

    const onClick = (e: google.maps.MapMouseEvent) => {
        if (e.latLng !== null) {
            const addingMark = {lat: e.latLng.lat(), lng: e.latLng.lng()}
            setMarker([...markers, addingMark]);
        }
    }

    return (
        <div className="App">
            {!isLoaded ? (
                <LoaderMapComponent></LoaderMapComponent>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={metz}
                    zoom={10}
                    onClick={onClick}
                >
                    <MarkersViewComponent markers={markers}></MarkersViewComponent>
                </GoogleMap>
            )}
        </div>
    );
};

export default GoogleMapsComponent;