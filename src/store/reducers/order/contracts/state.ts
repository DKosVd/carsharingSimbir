export interface OrderState {
    choseCity: choseCity | null;
    choseCar: choseCar | null;
    choseDLC: choseDLC | null;
    step: number;
    currentStep: number;
    btnOpt: btnOpt[];
}

export interface btnOpt {
    name: string;
    isDisabled: boolean;
}

export interface choseCity {
    city: string;
    address: string;
}

export interface choseCar {
    model: string;
    minprice: number;
    maxprice: number;
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