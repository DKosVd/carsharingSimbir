import { all } from "redux-saga/effects";
import { carSaga } from "./sagas/city";
import { pointSaga } from "./sagas/point";

export default function* rootSaga() {
    yield all([
        carSaga(),
        pointSaga()
    ])
}