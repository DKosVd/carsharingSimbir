
import { Marker, useMap } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const LocationMarker = (position: LatLngExpression) => {
    const map = useMap()
    map.flyTo(position , map.getZoom());

  
    return position === null ? null : (
      <Marker position={position}>
      </Marker>
    )
}

export default LocationMarker;
  