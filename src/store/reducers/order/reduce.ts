// import { LangAction, LangActionType } from '../../actions/lang/lang';
import { OrderAction, OrderActionType } from '../../actions/order/order';
import { OrderState } from './contracts/state';


const initialState: OrderState = {
    choseCity: null,
    choseCar: null,
    choseDLC: null,
    step: 0,
    currentStep: 0,
    btnOpt: [{name: 'Выбрать модель', isDisabled: true}, {name: 'Дополнительно', isDisabled: true}, {name: 'Итого', isDisabled: true}, {name: 'Заказать', isDisabled: true}, {name: 'Отменить', isDisabled: true, className: true}]
}

export const orderReducer = (state = initialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionType.CHOSE_CAR:
            return {
                ...state,
                choseCar: action.payload
            }
        case OrderActionType.CHOSE_CITY: 
            return {
                ...state, 
                choseCity: {
                    city: action.payload
                }
            }
        case OrderActionType.CHOSE_COLOR: 
            return {
                ...state,
                choseDLC: {
                    ...state.choseDLC,
                    color: action.payload
                }
            }
        case OrderActionType.CHOSE_PLACE: 
            return {
                ...state,
                choseCity: {
                    ...state.choseCity,
                    address: action.payload
                }
            }
        case OrderActionType.CHANGE_STEP: 
            return {
                ...state,
                step: action.payload
            }
        case OrderActionType.CHANGE_ACTIVE_STEP: 
            return {
                ...state,
                currentStep: action.payload
            }
        case OrderActionType.CHANGE_ACTIVE_BTN: 
            const tmp = [...state.btnOpt];
            tmp.splice(action.payload.active, 1, {
            ...tmp[action.payload.active],
            isDisabled: action.payload.isDisabled
            })
            return {
                ...state,
                btnOpt: tmp
            }
        case OrderActionType.CLEAR_CITY_PLACE: {
            return {
                ...state,
                choseCity: null
            }
        }
        case OrderActionType.CLEAR_CARS: {
            return {
                ...state,
                choseCar: null
            }
        }
        case OrderActionType.CLEAR_DLC: {
            return {
                ...state,
                choseDLC: null
            }
        }
        default: 
            return state;
    }
}