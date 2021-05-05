import { ICity } from '../store/reducers/city/contracts/state'
import {axios} from '../utils/axios'

interface Response {
    data: ICity[] | null
}

export const cityApi = {
    async get() {
        const { data } = await axios.get<Response>('/api/db/city')
        return data.data
    }
}