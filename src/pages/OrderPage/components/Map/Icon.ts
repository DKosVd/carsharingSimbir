import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: require('../../../../assets/static/Icon.svg').default,
    iconRetinaUrl: require('../../../../assets/static/Icon.svg').default,
    iconSize: [18, 18],
})

export {icon}