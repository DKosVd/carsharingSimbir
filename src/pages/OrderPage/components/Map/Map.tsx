import  {useEffect, useState } from 'react'
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import s from "./map.module.css"
import { LatLngTuple } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const provider = new OpenStreetMapProvider()

interface IMapProps {
    query?: string;
}

const Map = ({query}: IMapProps) => {
    const [position, setPosition] = useState<LatLngTuple | null>(null)
    useEffect(() => {
        async function name() {
            if(!query) {
                return
            }
            const result = await provider.search({query})
            if(result.length) {
                setPosition([result[0].x, result[0].y])
            }
        }
        name()
    }, [query])


    return (
        <div id="#map">
        <MapContainer  center={[54.32824, 48.38657]} zoom={13}  className={s.map}>
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
