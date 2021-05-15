import { ICar } from "../../cars/contracts/state";

export interface OrderState {
    choseCity: choseCity | null;
    choseCar: ICar | null;
    choseDLC: choseDLC | null;
    step: number;
    currentStep: number;
    btnOpt: btnOpt[];
    price: number;
}

export interface btnOpt {
    name: string;
    isDisabled: boolean;
    className?: boolean;
}

export interface choseCity {
    city: string;
    address: string;
}

export interface choseDLC {
    color: string;
    startDate: Date | [Date, Date] | null;
    returnDate: Date | [Date, Date] | null;
    rates: IRate[];
    choseRate: IRate;
    dlc: dls;
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

export interface dls {
    fullOil?: boolean;
    babySeat?: boolean;
    rightDrive?: boolean;
}