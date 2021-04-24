import { Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const LocationMarker = (position: LatLngExpression) => {
    const map = useMap()
    map.flyTo(position , map.getZoom());

  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          <span>Тут</span>
        </Popup>
      </Marker>
    )
}

export default LocationMarker;
  