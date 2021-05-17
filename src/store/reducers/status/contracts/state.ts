export interface IStatus {
    name?: string;
    id?: string;
}

export interface StatusState {
    status: IStatus[],
    choseStatus: IStatus | null
}
