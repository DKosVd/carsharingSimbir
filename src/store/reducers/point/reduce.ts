import { PointAction, PointActionType } from "../../actions/point/point";
import { PointState } from "./contracts/state";


const initialState:PointState = {
    points: null,
    pointbycity: null
}

export const pointReduce = (state = initialState, action: PointAction) => {
    switch(action.type) {
        case PointActionType.SET_POINTS: 
            return {
                ...state,
                points: action.payload,
            }
        case PointActionType.SET_POINTS_CITY: 
            return {
                ...state, 
                pointbycity: action.payload.filter(el => el.point[0])
            }
        case PointActionType.CLEAR_POINTS_CITY: 
            return {
                ...state,
                points: [],
                pointbycity: []
            }
        default: 
            return state
    }
}

