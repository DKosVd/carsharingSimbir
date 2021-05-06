import { CarsActionType, CarsAction } from "../../actions/cars/cars";
import { CarsState } from './contracts/state'

const initialState: CarsState = {
    cars: null,
    carsByType: null,
    category: null
}

export const carsReducer = (state = initialState, action: CarsAction) => {
    switch(action.type) {
        case CarsActionType.SET_CARS: 
            return {
                ...state,
                cars: action.payload,
                carsByType: action.payload
            }
        case CarsActionType.SET_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case CarsActionType.SET_CARS_BY_TYPE: 
            if(action.payload === 'all') {
                return {
                    ...state,
                    carsByType: state.cars
                }
            }
            return {
                ...state,
                carsByType: state.cars?.filter(el => el.categoryId.id === action.payload)
            }
        default: 
            return state
    }
}
