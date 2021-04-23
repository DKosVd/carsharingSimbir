import React, { createRef, useEffect, useState } from 'react'
import { Popup, useMap} from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import s from "./map.module.css"
import L, { LatLngTuple } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';



const searchControl = new (GeoSearchControl as any)({
    style: 'button',
    provider: new OpenStreetMapProvider(),
});

const Map: React.FC = () => {
    const ref = createRef<HTMLDivElement>();
    const [position, setPosition] = useState<LatLngTuple | null>(null)
    useEffect(() => {
        let map = new L.Map(ref.current as HTMLElement);
        map.addControl(searchControl);
        const form:any = document.querySelector('.geosearch form')
        const input:any = document.querySelector('.glass')
        input.value = 'Самара'
        map.on('geosearch/showlocation', (e: any) => {
            setPosition([e.location.x, e.location.y])
        })
    }, [])



    return (
        <div id="#map" ref={ref}>
        <MapContainer  center={[54.32824, 48.38657]} zoom={13} scrollWheelZoom={false} className={s.map}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && <LocationMarker {...{lat: position[1], lng: position[0]}}/>}
        </MapContainer>
        </div>
    )
}

export default Map;
