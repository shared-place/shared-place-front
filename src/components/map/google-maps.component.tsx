import React, {useState} from 'react';
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import {config} from "../../config";
import LoaderMapComponent from "./loader-map.component";
import MarkersViewComponent from "./markers-view.component";

const GoogleMapsComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: config.API_KEY_GOOGLE_MAPS,
    });
    const metz: google.maps.LatLngLiteral = { lat: 49.133333, lng: 6.166667 }
    const [center, setCenter] = useState(metz)
    const [markers, setMarker] = useState([center]);

    const onClickAddMarker = (e: google.maps.MapMouseEvent) => {
        if (e.latLng !== null) {
            const addingMark: google.maps.LatLngLiteral = {lat: e.latLng.lat(), lng: e.latLng.lng()}
            setMarker([...markers, addingMark]);
            setCenter(addingMark);
        }
    }

    return (
        <div className="App">
            {!isLoaded ? (
                <LoaderMapComponent></LoaderMapComponent>
            ) : (
                    <GoogleMap
                        mapContainerClassName="map-container"
                        center={center}
                        zoom={10}
                        onClick={onClickAddMarker}
                    >
                        <MarkersViewComponent markers={markers}></MarkersViewComponent>
                    </GoogleMap>
            )}
            {!isLoaded ? (
                <div></div>
            ) : (<div>
                <button>LOL</button>
            </div>)}
        </div>
    );
};

export default GoogleMapsComponent;