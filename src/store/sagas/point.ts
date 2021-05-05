import { all, call, put, takeEvery } from "redux-saga/effects";
import { mapApi } from "../../services/mapApi";
import { pointApi } from "../../services/pointApi";
import { IFetchPointsAction, IFetchPointsByCityAction, PointActionType, SetPointsAction, SetPointsByCityAction } from "../actions/point/point";
import { IPoints, IPointsByCity } from "../reducers/point/contracts/state";

export function* pointSaga() {
    yield takeEvery(PointActionType.FETCH_POINTS, getPoints);
    yield takeEvery(PointActionType.FETCH_POINTS_CITY, getPointsByCity)
}

function* getPoints({payload: id}: IFetchPointsAction) {
    try {
        const item:IPoints[] = yield call(pointApi.get)
        yield put(SetPointsAction(item.filter((el) => {
            return el.cityId && el.cityId.id === id
        })))
    } catch(err) {
        console.log(err)
    }
}

function* getPointsByCity({payload}: IFetchPointsByCityAction) {
    try {
        const result:IPointsByCity[] = yield all(payload.map( (value) => call(pointSearch, value)))
        yield put(SetPointsByCityAction(result))
    } catch(err) {
        console.log(err)
    }
}

function* pointSearch(value: IPoints) {
    try {
        const result: {x: number, y: number} | null = yield call(mapApi.searchByText, `${value.cityId.name} ${value.address}`)
        return {
            name: `${value.name}, ${value.address}`, 
            point: [result?.x, result?.y]
        }
    } catch(err) {
        console.log(err)
    }
}