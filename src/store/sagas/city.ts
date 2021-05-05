import { call, put, takeEvery } from "redux-saga/effects";
import { cityApi } from "../../services/cityApi";
import { mapApi } from "../../services/mapApi";
import { CityActionType, IFetchCitiesCoordsAction, SetCitiesAction, SetPointCity } from "../actions/city/city";
import { ICity } from "../reducers/city/contracts/state";

export function* carSaga() {
    yield takeEvery(CityActionType.FETCH_CITIES, getCity);
    yield takeEvery(CityActionType.FETCH_POINTS, getPoint);
}

function* getCity() {
    try {
        const item:ICity[] = yield call(cityApi.get)
        yield put(SetCitiesAction(item))
    } catch(err) {
        console.log(err)
    }
}

function* getPoint({payload}: IFetchCitiesCoordsAction) {
    try {
        const result: {x: number, y: number} | null = yield call(mapApi.searchByText, payload)
        if(result) yield put(SetPointCity([result.x, result.y]))
    } catch(err) {
        console.log(err)
    }
}