import { IRate, PostState } from '../store/reducers/order/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: IRate[] | null
}

interface ResponsePost {
    data: PostState
}

export const orderApi = {
    async get() {
        const { data } = await instance.get<Response>('/rate')
        return data.data
    },
    async create(info: PostState) {
        const {data} = await instance.post<ResponsePost>('/order', info)
        return data.data
    },
    async getById(id: string) {
        const { data } = await instance.get<ResponsePost>(`/order/${id}`);
        return data.data
    }
}