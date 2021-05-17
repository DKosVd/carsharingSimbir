import { Action } from 'redux';
import { ICar } from '../../reducers/cars/contracts/state';
import { choseCity, IDlcRate, IRate } from '../../reducers/order/contracts/state';

export enum OrderActionType {
    CHOSE_CITY = 'order/CHOSE_CITY',
    CHOSE_PLACE = 'order/CHOSE_PLACE',
    CHOSE_CAR = 'order/CHOSE_CAR',
    FETCH_RATE = 'order/FETCH_RATE',
    SET_RATE = 'order/SET_RATE',
    CHANGE_ACTIVE_BTN = 'order/CHANGE_ACTIVE_BTN',
    CLEAR_CITY_PLACE = 'order/CLEAR_CITY_PLACE',
    CLEAR_ADDRESS_PLACE = 'order/CLEAR_ADDRESS_PLACE',
    CHANGE_STEP = 'order/CHANGE_STEP',
    CHANGE_ACTIVE_STEP = 'order/CHANGE_ACTIVE_STEP',
    CHOSE_COLOR = 'order/CHOSE_COLOR',
    CHOSE_DATE_FROM = 'order/CHOSE_DATE_FROM',
    CHOSE_DATE_TO = 'order/CHOSE_DATE_TO',
    CHOSE_RATE = 'order/CHOSE_RATE',
    CHOSE_DLC_RATES = 'order/CHOSE_DLC_RATES',
    CLEAR_CARS = 'order/CLEAR_CARS',
    CLEAR_DLC = 'order/CLEAR_DLC',
    ACCEPT_ORDER = 'order/ACCEPT_ORDER',
    SET_NUMBER_ORDER = 'order/SET_NUMBER_ORDER',
    FETCH_ORDER_BY_ID = 'order/FETCH_ORDER_BY_ID',
    SET_PRICE = 'order/SET_PRICE',
}

export interface ISetPrice extends Action<OrderActionType> {
    type: OrderActionType.SET_PRICE,
    payload: number;
}


export interface IChoseCar extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_CAR,
    payload: ICar;
}

export interface IFetchOrderByIdA extends Action<OrderActionType> {
    type: OrderActionType.FETCH_ORDER_BY_ID,
    payload: string
}

export interface ISetNumberOrder extends Action<OrderActionType> {
    type: OrderActionType.SET_NUMBER_ORDER,
    payload: string;
}

export interface IAcceptOrder extends Action<OrderActionType> {
    type: OrderActionType.ACCEPT_ORDER,
}

export interface IChoseDlcRates extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_DLC_RATES,
    payload: IDlcRate
}

export interface IChoseDateFrom extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_DATE_FROM,
    payload: Date | [Date, Date] | null;
}

export interface IChoseDateTo extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_DATE_TO,
    payload: Date | [Date, Date] | null;
}

export interface IFetchRate extends Action<OrderActionType> {
    type: OrderActionType.FETCH_RATE
}

export interface IChoseRateAction extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_RATE,
    payload: IRate
}

export interface ISetRateAction extends Action<OrderActionType> {
    type: OrderActionType.SET_RATE,
    payload: IRate[]
}

export interface IChoseColor extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_COLOR,
    payload: string;
}

export interface IClearCars extends Action<OrderActionType> {
    type: OrderActionType.CLEAR_CARS,
}

export interface IClearDLC extends Action<OrderActionType> {
    type: OrderActionType.CLEAR_DLC,
}

export interface IChangeActiveStep extends Action<OrderActionType> {
    type: OrderActionType.CHANGE_ACTIVE_STEP,
    payload: number;
}

export interface IChoseCity extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_CITY,
    payload: choseCity['city'];
}


export interface IChosePlace extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_PLACE,
    payload: choseCity['address'];
}

export interface IChangeStep extends Action<OrderActionType> {
    type: OrderActionType.CHANGE_STEP,
    payload: number;
}

export interface IChangeActiveBtn extends Action<OrderActionType> {
    type: OrderActionType.CHANGE_ACTIVE_BTN,
    payload: { active: number, isDisabled: boolean };
}

export interface IClearCityPlace extends Action<OrderActionType> {
    type: OrderActionType.CLEAR_CITY_PLACE
}

export interface IClearAddresPlace extends Action<OrderActionType> {
    type: OrderActionType.CLEAR_ADDRESS_PLACE
}

export const ClearCityPlace = (): IClearCityPlace => ({
    type: OrderActionType.CLEAR_CITY_PLACE
})

export const SetNumberOrderAction = (payload: string) : ISetNumberOrder => ({
    type: OrderActionType.SET_NUMBER_ORDER,
    payload
})

export const ClearAddresPlace = (): IClearAddresPlace => ({
    type: OrderActionType.CLEAR_ADDRESS_PLACE
})

export const ClearCars = (): IClearCars => ({
    type: OrderActionType.CLEAR_CARS
})

export const FetchRateAction = (): IFetchRate => ({
    type: OrderActionType.FETCH_RATE
})

export const ChoseDateFrom = (payload: Date | [Date, Date] | null ): IChoseDateFrom => ({
    type: OrderActionType.CHOSE_DATE_FROM,
    payload
})

export const ChoseRateAction = (payload: IRate): IChoseRateAction => ({
    type: OrderActionType.CHOSE_RATE,
    payload
})

export const ChoseDateTo = (payload: Date | [Date, Date] | null ): IChoseDateTo => ({
    type: OrderActionType.CHOSE_DATE_TO,
    payload
})

export const FetchOrderByIdAction = (payload: string): IFetchOrderByIdA => ({
    type: OrderActionType.FETCH_ORDER_BY_ID,
    payload
})

export const ClearDLC = (): IClearDLC => ({
    type: OrderActionType.CLEAR_DLC
})

export const ChangeActiveBtn = (payload: { active: number, isDisabled: boolean }): IChangeActiveBtn => ({
    type: OrderActionType.CHANGE_ACTIVE_BTN,
    payload
})

export const ChangeStepAction = (payload: number): IChangeStep => ({
    type: OrderActionType.CHANGE_STEP,
    payload
})

export const SetPriceAction = (payload: number) :ISetPrice => ({
    type: OrderActionType.SET_PRICE,
    payload
})


export const ChangeActiveStepAction = (payload: number): IChangeActiveStep => ({
    type: OrderActionType.CHANGE_ACTIVE_STEP,
    payload
})

export const ChoseCityAction = (payload: choseCity['city']): IChoseCity => ({
    type: OrderActionType.CHOSE_CITY,
    payload
})

export const ChosePlaceAction = (payload: choseCity['address']): IChosePlace => ({
    type: OrderActionType.CHOSE_PLACE,
    payload
})

export const ChoseColorAction = (payload: string): IChoseColor => ({
    type: OrderActionType.CHOSE_COLOR,
    payload
})

export const ChoseCarAction = (payload: ICar): IChoseCar => ({
    type: OrderActionType.CHOSE_CAR,
    payload
})

export const SetRateAction = (payload: IRate[]): ISetRateAction => ({
    type: OrderActionType.SET_RATE,
    payload
})

export const ChoseDlcRatesAction = (payload: IDlcRate):IChoseDlcRates => ({
    type: OrderActionType.CHOSE_DLC_RATES,
    payload
}) 

export const AcceptAction = ():IAcceptOrder => ({
    type: OrderActionType.ACCEPT_ORDER,
})


export type OrderAction = IChoseCar |
    IChosePlace |
    IChoseCity |
    IChangeStep |
    IChangeActiveBtn |
    IClearCityPlace |
    IChangeActiveStep |
    IClearCars |
    IClearDLC |
    IChoseColor |
    IFetchRate |
    ISetRateAction |
    IChoseDateFrom |
    IChoseDateTo | 
    IChoseRateAction |
    IChoseDlcRates |
    IAcceptOrder |
    IClearAddresPlace | 
    ISetNumberOrder | 
    IFetchOrderByIdA | 
    ISetPrice;