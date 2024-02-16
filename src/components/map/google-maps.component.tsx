import React, {useState} from 'react';
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import {config} from "../../config";
import LoaderMapComponent from "./loader-map.component";
import MarkersViewComponent from "./markers-view.component";
import {getRandom, getRandomRange} from "../../shared/utils/random";

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

    const setRandomMarker = () => {
        const randomLat = getRandomRange(-90, 90);
        const randomLng = getRandomRange(-180, 180);
        setCenter({lat: randomLat, lng: randomLng});
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
                <button onClick={() => setRandomMarker()}>Random</button>
            </div>)}
        </div>
    );
};

export default GoogleMapsComponent;