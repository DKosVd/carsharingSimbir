import { ICar } from "../../cars/contracts/state";

export interface OrderState {
    choseCity: choseCity | null;
    choseCar: ICar | null;
    choseDLC: choseDLC | null;
    step: number;
    currentStep: number;
    btnOpt: btnOpt[];
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
    date: Date | string;
    rate: string;
    dlc: dls;
}

export interface dls {
    fullOil?: boolean;
    babySeat?: boolean;
    rightDrive?: boolean;
}