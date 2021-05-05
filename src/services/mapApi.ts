import { OpenStreetMapProvider } from 'leaflet-geosearch';
const provider = new OpenStreetMapProvider()

export const mapApi = {
    async searchByText(query: string) {
        const result = await provider.search({query})
        return result[0]
    }
}