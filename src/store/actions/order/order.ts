import { Action } from 'redux';
import { choseCar } from '../../reducers/order/contracts/state';

export enum OrderActionType {
    CHOSE_CITY = 'order/CHOSE_CITY',
    CHOSE_PLACE = 'order/CHOSE_PLACE',
    CHOSE_CAR = 'order/CHOSE_CAR',
    CHOSE_COLOR = 'order/CHOSE_COLOR',
    CHOSE_DATE = 'order/CHOSE_DATE',
    CHOSE_RATE = 'order/CHOSE_RATE',
    CHOSE_FULL_OIL = 'order/CHOSE_FULL_OIL',
    CHOSE_BABY_SEAT = 'order/CHOSE_BABY_SEAT',
    CHOSE_RIGHT_DRIVE = 'order/CHOSE_RIGHT_DRIVE'
}

export interface IChoseCar extends Action<OrderActionType> {
    type: OrderActionType.CHOSE_CAR,
    payload: choseCar;
}

export const ChoseCarAction = (payload: choseCar): IChoseCar => ({
    type: OrderActionType.CHOSE_CAR,
    payload
})


export type OrderAction = IChoseCar