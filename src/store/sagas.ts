import { all } from "redux-saga/effects";
import { carSaga } from "./sagas/cars";
import { citySaga } from "./sagas/city";
import { pointSaga } from "./sagas/point";

export default function* rootSaga() {
    yield all([
        citySaga(),
        pointSaga(),
        carSaga()
    ])
}