// import { LangAction, LangActionType } from '../../actions/lang/lang';
import { dateFormat } from '../../../utils/dateFormat';
import { OrderAction, OrderActionType } from '../../actions/order/order';
import { OrderState } from './contracts/state';


const initialState: OrderState = {
    choseCity: null,
    choseCar: null,
    choseDLC: null,
    step: 0,
    price: 0,
    currentStep: 0,
    btnOpt: [{ name: 'Выбрать модель', isDisabled: true }, { name: 'Дополнительно', isDisabled: true }, { name: 'Итого', isDisabled: true }, { name: 'Заказать', isDisabled: true }, { name: 'Отменить', isDisabled: true, className: true }]
}

export const orderReducer = (state = initialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionType.CHOSE_CAR:
            return {
                ...state,
                choseCar: action.payload,
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
        case OrderActionType.SET_RATE:
            return {
                ...state,
                choseDLC: {
                    ...state.choseDLC,
                    rates: action.payload
                }
            }
        case OrderActionType.CHANGE_STEP:
            return {
                ...state,
                step: action.payload
            }
        case OrderActionType.CHOSE_RATE:
            let date = dateFormat(state.choseDLC?.returnDate as Date, state.choseDLC?.startDate as Date);
            let price = state.choseCar!.priceMin;
            let result = typeRateAndPrice(date, action.payload.rateTypeId.name, action.payload.price, price);
            if (date.length) {
                return {
                    ...state,
                    price: result.price,
                    choseDLC: {
                        ...state.choseDLC,
                        returnDate: result.returnDate ? null : state.choseDLC?.returnDate,
                        choseRate: action.payload
                    }
                }
            }
            return {
                ...state,
                price: null,
                choseDLC: {
                    ...state.choseDLC,
                    choseRate: action.payload
                }
            }
        case OrderActionType.CHOSE_DATE_FROM:
            return {
                ...state,
                price: 0,
                choseDLC: {
                    ...state.choseDLC,
                    returnDate: null,
                    startDate: action.payload
                }
            }
        case OrderActionType.CHOSE_DATE_TO:
            let price_ = state.choseCar!.priceMin;
            let _;
            if (state.choseDLC?.choseRate) {
                _ = typeRateAndPrice(dateFormat(action.payload as Date, state.choseDLC.startDate as Date), state.choseDLC.choseRate.rateTypeId.name, state.choseDLC.choseRate.price, price_)
            }
            return {
                ...state,
                price: _?.price,
                choseDLC: {
                    ...state.choseDLC,
                    returnDate: action.payload
                }
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
                price: 0,
                choseDLC: null
            }
        }
        default:
            return state;
    }
}


const typeRateAndPrice = (date: number[], type: string, plPrice: number, price: number): { price?: number, returnDate?: boolean } => {
    if (type === 'На сутки' ) {
        let currentPrice = price + plPrice * date[0] + Math.floor(plPrice * (date[1] ? date[1] / 24 : 0));
        return { price: currentPrice }
    }
    if (type === 'Недельный Плюс' && date[0] < 7) {
        return { returnDate: true }
    }
    if (type === 'Недельный Плюс' && date[0] >= 7) {
        let currentPrice = price + Math.floor(plPrice * date[0] / 7) + Math.floor(plPrice * (date[1] ? date[1] / (7 * 24) : 0));
        return { price: currentPrice };
    }
    if (type === 'Поминутно') {
        let currentPrice = price + Math.floor(plPrice * date[2] * 60);
        return { price: currentPrice };
    }
    return {}
}