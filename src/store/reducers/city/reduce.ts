import { CitiesAction, CityActionType } from "../../actions/city/city";
import { CityState } from "./contracts/state";

const initialState: CityState = {
    cities: null,
    point: null
}

export const cityReducer = (state = initialState, action: CitiesAction) => {
    switch(action.type) {
        case CityActionType.SET_CITIES: 
            return {
                ...state, 
                cities: action.payload
            }
        case CityActionType.SET_POINTS:
            return {
                ...state,
                point: action.payload
            }
        default: 
            return state
    }
}

