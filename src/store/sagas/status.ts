import { call, put, takeEvery } from "redux-saga/effects";
import { statusApi } from "../../services/statusApi";
import { SetStatusAction, StatusActionType } from "../actions/status/status";
import { IStatus } from "../reducers/status/contracts/state";

export function* statusSaga() {
    yield takeEvery(StatusActionType.FETCH_STATUS, getStatus);
}

function* getStatus() {
    try {
        const item:IStatus[] = yield call(statusApi.get)
        yield put(SetStatusAction(item))
    } catch(err) {
        console.log(err)
    }
}
