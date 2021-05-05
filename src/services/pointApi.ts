import { IPoints } from '../store/reducers/point/contracts/state'
import {instance} from '../utils/axios'

interface Response {
    data: IPoints[] | null
}

export const pointApi = {
    async get() {
        const { data } = await instance.get<Response>('/point')
        return data.data
    }
}