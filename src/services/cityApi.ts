import { ICity } from '../store/reducers/city/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: ICity[] | null
}

export const cityApi = {
    async get() {
        const { data } = await instance.get<Response>('/city')
        return data.data
    }
}