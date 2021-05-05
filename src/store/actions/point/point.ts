import { Action } from 'redux';
import { IPoints, IPointsByCity } from '../../reducers/point/contracts/state';

export enum PointActionType {
    SET_POINTS = 'point/SET_POINTS',
    FETCH_POINTS = 'points/FETCH_POINTS',
    SET_POINTS_CITY = 'points/SET_POINTS_CITY',
    CLEAR_POINTS_CITY = 'points/CLEAR_POINTS_CITY',
    FETCH_POINTS_CITY = 'points/FETCH_POINTS_CITY'
}

export interface ISetPointsAction extends Action<PointActionType> {
    type: PointActionType.SET_POINTS,
    payload: IPoints[],
}

export interface IFetchPointsAction extends Action<PointActionType> {
    type: PointActionType.FETCH_POINTS,
    payload: string;
}

export interface IFetchPointsByCityAction extends Action<PointActionType> {
    type: PointActionType.FETCH_POINTS_CITY,
    payload: IPoints[];
}

export interface ISetPointsByCityAction extends Action<PointActionType> {
    type: PointActionType.SET_POINTS_CITY,
    payload: IPointsByCity[];
}

export interface IClearPointsByCityAction extends Action<PointActionType> {
    type: PointActionType.CLEAR_POINTS_CITY
}

export const ClearPointsByCityAction = () => ({
    type: PointActionType.CLEAR_POINTS_CITY
})

export const FetchPointsByCityAction = (payload: IPoints[]): IFetchPointsByCityAction=> ({
    type: PointActionType.FETCH_POINTS_CITY,
    payload
})

export const FetchPointsAction = (payload: string): IFetchPointsAction=> ({
    type: PointActionType.FETCH_POINTS,
    payload
})

export const SetPointsAction = (payload:IPoints[]): ISetPointsAction=> ({
    type: PointActionType.SET_POINTS,
    payload
})

export const SetPointsByCityAction = (payload: IPointsByCity[]): ISetPointsByCityAction=> ({
    type: PointActionType.SET_POINTS_CITY,
    payload
})



export type PointAction = ISetPointsAction | IFetchPointsAction | ISetPointsByCityAction | IFetchPointsByCityAction | IClearPointsByCityAction;
