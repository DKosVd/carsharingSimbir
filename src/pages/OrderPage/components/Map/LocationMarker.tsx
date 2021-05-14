import { Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { icon } from './Icon';

interface ILocationMarkerProps {
  position: LatLngExpression,
  name?: string
  place?: string;
}

const LocationMarker = ({position, name, place}: ILocationMarkerProps) => {
  
    const map = useMap()
    map.flyTo(position , map.getZoom());

    
    return position === null ? null : (<>
      {name && <Marker position={position} icon={icon} >
        <Popup>
          <span>{name}</span>
        </Popup>
      </Marker>}
      </>
    )
}

export default LocationMarker;
  