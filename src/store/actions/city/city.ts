import { Action } from 'redux';
import { ICity } from '../../reducers/city/contracts/state';

export enum CityActionType {
    FETCH_CITIES = 'city/FETCH_CITIES',
    FETCH_POINTS = 'city/FETCH_POINTS',
    SET_CITIES = 'city/SET_CITIES',
    SET_POINTS = 'city/SET_POINTS'
}

export interface ISetCitiesAction extends Action<CityActionType> {
    type: CityActionType.SET_CITIES,
    payload: ICity[];
}

export interface IFetchCitiesAction extends Action<CityActionType> {
    type: CityActionType.FETCH_CITIES
}

export interface IFetchCitiesCoordsAction extends Action<CityActionType> {
    type: CityActionType.FETCH_POINTS,
    payload: string
}

export interface ISetCitiesCoordsAction extends Action<CityActionType> {
    type: CityActionType.SET_POINTS,
    payload: [number, number]
}

export const SetPointCity = (payload: [number, number]): ISetCitiesCoordsAction => ({
    type: CityActionType.SET_POINTS,
    payload
})

export const FetchPointCity = (payload: string): IFetchCitiesCoordsAction => ({
    type: CityActionType.FETCH_POINTS,
    payload
})

export const SetCitiesAction = (payload: ICity[]): ISetCitiesAction => ({
    type: CityActionType.SET_CITIES,
    payload
})

export const FetchCitiesAction = (): IFetchCitiesAction => ({
    type: CityActionType.FETCH_CITIES
})

export type CitiesAction = ISetCitiesAction | IFetchCitiesAction | IFetchCitiesCoordsAction | ISetCitiesCoordsAction

