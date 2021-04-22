import { useState } from 'react';
import { Marker } from 'react-leaflet';
import { Popup, useMapEvents } from 'react-leaflet';
import { LatLng, LocationEvent } from 'leaflet';

function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e: LocationEvent ) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export default LocationMarker;
  