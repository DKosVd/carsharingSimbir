import { ICar, ICategory } from '../store/reducers/cars/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: ICar[] | null | ICategory[];
}


export const carApi = {
    async get() {
        const { data } = await instance.get<Response>('/car')
        return data.data
    },
    async getCategory() {
        const { data } = await instance.get<Response>('/category')
        return data.data
    }
}