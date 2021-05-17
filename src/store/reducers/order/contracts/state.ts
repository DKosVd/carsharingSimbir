import { ICar } from "../../cars/contracts/state";
import { ICity } from "../../city/contracts/state";
import { IPoints } from "../../point/contracts/state";
import { IStatus } from "../../status/contracts/state";

export interface OrderState {
    id?: string;
    choseCity: choseCity | null;
    choseCar: ICar | null;
    choseDLC: choseDLC | null;
    step: number;
    currentStep: number;
    btnOpt: btnOpt[];
    dlcrates: IDlcRate[];
    price: number;
}

export interface PostState {
    id?: string;
    orderStatusId: {
        name?: string,
        id: string,
    },
    cityId: ICity,
    pointId: IPoints,
    carId: ICar,
    color: string,
    dateFrom: number,
    dateTo: number, 
    rateId: IRate,
    price: number,
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean
}

export interface btnOpt {
    name: string;
    isDisabled: boolean;
    className?: boolean;
}

export interface choseCity {
    city: ICity;
    address: IPoints;
}

export interface choseDLC {
    color: string;
    startDate: Date | [Date, Date] | null;
    returnDate: Date | [Date, Date] | null;
    rates: IRate[];
    choseRate: IRate;
    dlc: dlc;
}

export interface IDlcRate {
    name: string;
    price: number;
    isPresent?: boolean;
}

export interface IRate {
    price: number;
    rateTypeId: IRateTypeId;
    id: string;
}

export interface IRateTypeId {
    unit: string;
    name: string;
    id: string;
}

export interface dlc {
    fullOil?: IDlcRate;
    babySeat?: IDlcRate;
    rightDrive?: IDlcRate;
}