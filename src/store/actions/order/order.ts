import { Action } from 'redux';
import { ICar } from '../../reducers/cars/contracts/state';
import { choseCity } from '../../reducers/order/contracts/state';

export enum OrderActionType {
    CHOSE_CITY = 'order/CHOSE_CITY',
    CHOSE_PLACE = 'order/CHOSE_PLACE',
    CHOSE_CAR = 'order/CHOSE_CAR',
    CHANGE_ACTIVE_BTN = 'order/CHANGE_ACTIVE_BTN',
    CLEAR_CITY_PLACE = 'order/CLEAR_CITY_PLACE',
    CHANGE_STEP = 'order/CHANGE_STEP',
    CHANGE_ACTIVE_STEP = 'order/CHANGE_ACTIVE_STEP',
    CHOSE_COLOR = 'order/CHOSE_COLOR',
    CHOSE_DATE = 'order/CHOSE_DATE',
    CHOSE_RATE = 'order/CHOSE_RATE',
    CHOSE_FULL_OIL = 'order/CHOSE_FULL_OIL',
    CHOSE_BABY_SEAT = 'order/CHOSE_BABY_SEAT',
    CHOSE_RIGHT_DRIVE = 'order/CHOSE_RIGHT_DRIVE'
}

export interface IChoseCar extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_CAR,
    payload: ICar;
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
    payload: {active: number, isDisabled: boolean};
}

export interface IClearCityPlace extends Action<OrderActionType> {
    type: OrderActionType.CLEAR_CITY_PLACE
}

export const ClearCityPlace = ():IClearCityPlace => ({
    type: OrderActionType.CLEAR_CITY_PLACE
})

export const ChangeActiveBtn = (payload: {active: number, isDisabled: boolean}): IChangeActiveBtn => ({
    type: OrderActionType.CHANGE_ACTIVE_BTN,
    payload
}) 

export const ChangeStepAction = (payload: number): IChangeStep => ({
    type: OrderActionType.CHANGE_STEP,
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

export const ChoseCarAction = (payload: ICar): IChoseCar => ({
    type: OrderActionType.CHOSE_CAR,
    payload
})


export type OrderAction = IChoseCar | IChosePlace | IChoseCity | IChangeStep | IChangeActiveBtn | IClearCityPlace | IChangeActiveStep;