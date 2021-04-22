import React from 'react'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { MapContainer  } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import s from "./map.module.css"


const Map: React.FC = () => {
    return (
        <MapContainer center={[54.32824, 48.38657]} zoom={13} scrollWheelZoom={false} className={s.map}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[54.32824, 48.38657]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
            </Marker>
            <LocationMarker />
        </MapContainer>
    )
}

export default Map;
