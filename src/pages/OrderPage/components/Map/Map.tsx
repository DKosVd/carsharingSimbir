import  {useEffect } from 'react'
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import s from "./map.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { FetchPointCity } from '../../../../store/actions/city/city';
import { FetchPointsByCityAction } from '../../../../store/actions/point/point';

interface IMapProps {
    query?: string;
    place?: string;
}

const Map = ({query, place}: IMapProps) => {
    const points = useSelector( (state: RootState) => state.point.points);
    const pointByCity = useSelector( (state: RootState) => state.point.pointbycity)
    const position = useSelector( (state: RootState) => state.city.point);
    const dispatch = useDispatch()
    useEffect(() => {
        if(!query) {
            return
        }
        dispatch(FetchPointCity(query))
    }, [query, dispatch])

    useEffect( () => {
        if(!points) {
            return
        }
    dispatch(FetchPointsByCityAction(points))
    }, [points, dispatch])

    return (
        <div id="#map">
        <MapContainer  center={[54.32824, 48.38657]} zoom={13}  className={s.map}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && <LocationMarker  position={{lat: position[1], lng: position[0]}}/>}
            {pointByCity?.map( el =>  <LocationMarker key={`${el.name}`} position={{lat: el.point[1], lng: el.point[0]}} name={el.name} place={place}/>)}
        </MapContainer>
        </div>
    )
}

export default Map;
