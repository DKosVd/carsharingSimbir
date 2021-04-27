// import { LangAction, LangActionType } from '../../actions/lang/lang';
import { OrderAction, OrderActionType } from '../../actions/order/order';
import { OrderState } from './contracts/state';


const initialState: OrderState = {
    choseCity: null,
    choseCar: null,
    choseDLC: null
}

export const orderReducer = (state = initialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionType.CHOSE_CAR:
            return {
                ...state,
                choseCar: action.payload
            }
        default: 
            return state;
    }
}