import { call, put, takeEvery } from "redux-saga/effects";
import { carApi } from "../../services/carApi";
import { CarsActionType, SetCarsAction, SetCategoryAction } from "../actions/cars/cars";
import { ICar, ICategory } from "../reducers/cars/contracts/state";



export function* carSaga() {
    yield takeEvery(CarsActionType.FETCH_CARS, getCar);
    yield takeEvery(CarsActionType.FETCH_CATEGORY, getCategory)
}


function* getCar() {
    try {
        const item: ICar[] = yield call(carApi.get)
        yield put(SetCarsAction(item))
    } catch(err) {
        console.log(err)
    }
}

function* getCategory() {
    try {
        const item: ICategory[] = yield call(carApi.getCategory);
        yield put(SetCategoryAction(item))
    } catch(err) {
        console.log(err)
    }
}