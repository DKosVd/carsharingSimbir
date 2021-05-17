import { Action } from 'redux';
import { IStatus } from '../../reducers/status/contracts/state';


export enum StatusActionType {
    SET_STATUS = 'status/SET_STATUS',
    FETCH_STATUS = 'status/FETCH_STATUS',
    CHOSE_STATUS = 'status/CHOSE_STATUS'
}

export interface IFetchStatus extends Action<StatusActionType> {
    type: StatusActionType.FETCH_STATUS
}

export interface ISetStatus extends Action<StatusActionType> {
    type: StatusActionType.SET_STATUS,
    payload: IStatus[]
}

export interface IChoseStatus extends Action<StatusActionType> {
    type: StatusActionType.CHOSE_STATUS,
    payload: IStatus
}

export const FetchStatusAction = ():IFetchStatus => ({
    type: StatusActionType.FETCH_STATUS
})

export const SetStatusAction = (payload: IStatus[]):ISetStatus => ({
    type: StatusActionType.SET_STATUS,
    payload
})

export const ChoseStatusAction = (payload: IStatus):IChoseStatus => ({
    type: StatusActionType.CHOSE_STATUS,
    payload
})


export type StatusAction = IFetchStatus | ISetStatus | IChoseStatus; 