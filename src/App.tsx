import React, {useState} from 'react';
import './App.css';
import GoogleMapsComponent from "./components/map/google-maps.component";

function App() {
    return (
        <div>
            <h1>Shared place (WIP)</h1>
            <GoogleMapsComponent></GoogleMapsComponent>
        </div>
    );
}

export default App;
