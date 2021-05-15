import { call, put, takeEvery } from "redux-saga/effects";
import { orderApi } from "../../services/orderApi";
import { OrderActionType, SetRateAction } from "../actions/order/order";
import { IRate } from "../reducers/order/contracts/state";


export function* orderSaga() {
    yield takeEvery(OrderActionType.FETCH_RATE, getRate);
}

function* getRate() {
    try {
        const item:IRate[] = yield call(orderApi.get)
        yield put(SetRateAction(item))
    } catch(err) {
        console.log(err)
    }
}

