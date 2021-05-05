export interface ICity {
    name: string;
    id: string;
}

export interface CityState {
    cities: ICity[] | null,
    point: [number, number] | null
}