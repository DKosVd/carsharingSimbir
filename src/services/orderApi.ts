import { IRate } from '../store/reducers/order/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: IRate[] | null
}

export const orderApi = {
    async get() {
        const { data } = await instance.get<Response>('/rate')
        return data.data
    }
}