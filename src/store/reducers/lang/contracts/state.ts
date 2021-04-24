export interface LangState {
    lang: string;
    text: IText;
}

export interface ITypeElemSlider {
    title: string,
    text: string,
    image: any,
    colorButton: string
}

export interface ISidebarFull {
    park: string;
    insurance: string;
    service: string;
    gasoline: string;
}

export interface IText {
    title: string;
    subtitle: string;
    btnBook: string;
    sliderElems: ITypeElemSlider[];
    sidebarFull: ISidebarFull;
}