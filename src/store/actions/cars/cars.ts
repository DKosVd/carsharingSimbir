import { Action } from 'redux';
import { ICar, ICategory } from '../../reducers/cars/contracts/state';


export enum CarsActionType {
    FETCH_CARS = 'cars/FETCH_CARS',
    SET_CARS = 'cars/SET_CARS',
    FETCH_CATEGORY = 'cars/FETCH_CATEGORY',
    SET_CATEGORY = 'cars/SET_CATEGORY',
    SET_CARS_BY_TYPE = 'cars/SET_CARS_BY_TYPE'
}

export interface IFetchCars extends Action<CarsActionType> {
    type: CarsActionType.FETCH_CARS
}

export interface IFetchCategory extends Action<CarsActionType> {
    type: CarsActionType.FETCH_CATEGORY
}

export interface ISetCars extends Action<CarsActionType> {
    type: CarsActionType.SET_CARS,
    payload: ICar[]
}

export interface ISetCategory extends Action<CarsActionType> {
    type: CarsActionType.SET_CATEGORY,
    payload: ICategory[]
}

export interface ISetType extends Action<CarsActionType> {
    type: CarsActionType.SET_CARS_BY_TYPE,
    payload: string;
}

export const SetCarsAction = (payload: ICar[]):ISetCars => ({
    type: CarsActionType.SET_CARS,
    payload
})

export const SetCategoryAction = (payload: ICategory[]):ISetCategory => ({
    type: CarsActionType.SET_CATEGORY,
    payload
})

export const SetTypeAction = (payload: string): ISetType => ({
    type: CarsActionType.SET_CARS_BY_TYPE,
    payload
})

export const FetchCarsAction = ():IFetchCars => ({
    type: CarsActionType.FETCH_CARS
})

export const FetchCategoryAction = ():IFetchCategory => ({
    type: CarsActionType.FETCH_CATEGORY
})

export type CarsAction = IFetchCars | ISetCars | ISetType | ISetCategory | IFetchCategory;
