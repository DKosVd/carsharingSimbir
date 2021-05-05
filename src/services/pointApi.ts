import { IPoints } from '../store/reducers/point/contracts/state'
import {axios} from '../utils/axios'

interface Response {
    data: IPoints[] | null
}

export const pointApi = {
    async get() {
        const { data } = await axios.get<Response>('/api/db/point')
        return data.data
    }
}