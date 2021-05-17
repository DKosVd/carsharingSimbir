import { IStatus } from '../store/reducers/status/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: IStatus[] | null
}

export const statusApi = {
    async get() {
        const { data } = await instance.get<Response>('/orderStatus')
        return data.data
    }
}