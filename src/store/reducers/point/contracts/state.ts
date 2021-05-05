import { ICity } from "../../city/contracts/state";

export interface IPoints {
    address: string;
    name: string;
    cityId: ICity;
    id: string;
}

export interface PointState {
    points: IPoints[] | null,
    pointbycity: IPointsByCity[] | null
}

export interface IPointsByCity {
    point: [number, number],
    name: string
}