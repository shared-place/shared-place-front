import React from 'react';
import MarkerComponent from "./marker.component";

interface MarkersViewProps {
    markers: { lat: number, lng: number }[]
}


const MarkersViewComponent = (markersViewProps: MarkersViewProps) => {
    return (
        <div>
            {
                markersViewProps.markers
                    .map(
                        (e, index) => <MarkerComponent key={index} position={e}></MarkerComponent>
                    )
            }
        </div>
    );
};

export default MarkersViewComponent;