import { Action } from 'redux';

export enum LangActionType {
    CHANGE_LANG = 'lang/CHANGE_LANG',
}

export interface IChangeLangAction extends Action<LangActionType> {
    type: LangActionType.CHANGE_LANG,
    payload: string;
}

export const ChangeLangAction = (payload: string): IChangeLangAction => ({
    type: LangActionType.CHANGE_LANG,
    payload
})

export type LangAction = IChangeLangAction