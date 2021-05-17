// import { LangAction, LangActionType } from '../../actions/lang/lang';
import { dateFormat } from '../../../utils/dateFormat';
import { OrderAction, OrderActionType } from '../../actions/order/order';
import { dlc, OrderState } from './contracts/state';


const initialState: OrderState = {
    choseCity: null,
    choseCar: null,
    choseDLC: null,
    dlcrates: [{ name: 'Полный бак', price: 500 }, { name: 'Детское кресло', price: 200 }, { name: 'Правый руль', price: 1600 }],
    step: 0,
    price: 0,
    currentStep: 0,
    btnOpt: [{ name: 'Выбрать модель', isDisabled: true }, { name: 'Дополнительно', isDisabled: true }, { name: 'Итого', isDisabled: true }, { name: 'Заказать', isDisabled: true }]
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
        case OrderActionType.SET_PRICE:
            return {
                ...state,
                price: action.payload
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
        case OrderActionType.SET_NUMBER_ORDER:
            return {
                ...state,
                id: action.payload
            }
        case OrderActionType.CHANGE_STEP:
            return {
                ...state,
                step: action.payload
            }
        case OrderActionType.CHOSE_RATE:
            let date = dateFormat(state.choseDLC?.returnDate as Date, state.choseDLC?.startDate as Date);
            let price = state.choseCar!.priceMin;
            if(!date.length){
                price = 0;
            }
            if (state.choseDLC?.dlc) {
                price += checkTypeDlcRate(state.choseDLC.dlc)
            }

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
                price: price,
                choseDLC: {
                    ...state.choseDLC,
                    choseRate: action.payload
                }
            }
        case OrderActionType.CHOSE_DATE_FROM:
            let _p = state.choseCar!.priceMin;
            if (state.choseDLC?.dlc) {
                _p += checkTypeDlcRate(state.choseDLC.dlc)
            }
            return {
                ...state,
                price: _p,
                choseDLC: {
                    ...state.choseDLC,
                    returnDate: null,
                    startDate: action.payload
                }
            }
        case OrderActionType.CHOSE_DATE_TO:
            let price_ = state.choseCar!.priceMin;
            let _;
            if (state.choseDLC?.dlc) {
                price_ += checkTypeDlcRate(state.choseDLC.dlc)
            }
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
        case OrderActionType.CLEAR_ADDRESS_PLACE: {
            return {
                ...state, 
                choseCity: {
                    ...state.choseCity,
                    address: null
                }
            }
        }
        case OrderActionType.CLEAR_CARS: {
            return {
                ...state,
                choseCar: null
            }
        }
        case OrderActionType.CHOSE_DLC_RATES: {
            let date_ = dateFormat(state.choseDLC?.returnDate as Date, state.choseDLC?.startDate as Date);
            let __ = state.price ? state.price : state.choseCar!.priceMin;
            if(!date_.length) {
                __ = 0;
            }
            if(!state.choseDLC?.choseRate) {
                __ =  state.price;
            }
            let result_ = typeDlcRates(__, action.payload.name, state.choseDLC!.dlc, action.payload.price)
            return {
                ...state,
                price: result_.price,   
                choseDLC: {
                    ...state.choseDLC,
                    dlc: {
                        ...state.choseDLC?.dlc,
                        [`${result_.name}`]: {
                            name: action.payload.name,
                            price: action.payload.price,
                            isPresent: result_.isPresent
                        }
                    }
                }
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


const checkTypeDlcRate = (dlc: dlc): number => {
    let totalPriceDlc = 0;
    if (dlc.babySeat?.isPresent) {
        totalPriceDlc += dlc.babySeat.price
    }
    if (dlc.fullOil?.isPresent) {
        totalPriceDlc += dlc.fullOil.price
    }
    if (dlc.rightDrive?.isPresent) {
        totalPriceDlc += dlc.rightDrive.price
    }
    return totalPriceDlc;
}

const typeDlcRates = (__: number, name: string, dlc: dlc, price: number): {name?: string, isPresent?: boolean, price?: number} => {
    if ( name === 'Полный бак' ) {
        let bool = dlc?.fullOil?.isPresent ? true : false;
        return {
            name: 'fullOil',
            isPresent: !bool,
            price:  !bool ? __ + price : __ - price
        }
    }
    if (name === 'Детское кресло') {
        let bool = dlc?.babySeat?.isPresent ? true : false;
        return {
            name: 'babySeat',
            isPresent: !bool,
            price:  !bool ? __ + price : __ - price
        }
    }
    if (name === 'Правый руль') {
        let bool = dlc?.rightDrive?.isPresent ? true : false;
        return {
            name: 'rightDrive',
            isPresent: !bool,
            price:  !bool ? __ + price : __ - price
        }
    }
    return {}
}

const typeRateAndPrice = (date: number[], type: string, plPrice: number, price: number): { price?: number, returnDate?: boolean } => {
    if (type === 'На сутки') {
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