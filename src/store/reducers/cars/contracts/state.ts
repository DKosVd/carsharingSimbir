export interface CarsState {
    cars: ICar[] | null;
    carsByType: ICar[] | null;
    category: ICategory[] | null;
}

export interface ICar {
    id: string;
    name: string;
    description?: string;
    categoryId: ICategory;
    priceMax: number;
    thumbnail: IThumbnail,
    priceMin: number;
    colors?: string[];
}


export interface ICategory {
    name: string;
    description?: string;
    id: string;
}

export interface IThumbnail {
    size: number;
    originalname: string;
    mimetype: string;
    path: string;
}

