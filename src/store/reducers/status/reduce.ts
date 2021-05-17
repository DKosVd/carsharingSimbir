import { StatusAction, StatusActionType } from "../../actions/status/status";
import { StatusState } from "./contracts/state";

const initialState:StatusState = {
    status: [],
    choseStatus: null
}

export const statusReduce = (state = initialState, action: StatusAction) => {
    switch(action.type) {
        case StatusActionType.SET_STATUS: 
            return {
                ...state,
                status: action.payload,
            }
        case StatusActionType.CHOSE_STATUS: 
            return {
                ...state, 
                choseStatus: action.payload
            }
        default: 
            return state
    }
}

