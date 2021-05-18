import { call, put } from "redux-saga/effects";
import * as Eff from 'redux-saga/effects'
import { orderApi } from "../../services/orderApi";
import { ChoseCarAction, ChoseCityAction, ChoseColorAction, ChoseDateFrom, ChoseDateTo, ChoseDlcRatesAction, ChosePlaceAction, ChoseRateAction, IFetchOrderByIdA, OrderActionType, SetNumberOrderAction, SetPriceAction, SetRateAction } from "../actions/order/order";
import { IDlcRate, IRate, OrderState, PostState } from "../reducers/order/contracts/state";
import { RootState } from "../store";
import { StatusState } from "../reducers/status/contracts/state";
import { ChoseStatusAction } from "../actions/status/status";

const takeEvery: any = Eff.takeEvery;
const select:any = Eff.select;
const getOrder = (state: RootState) => state.order;
const getStatus = (state: RootState) => state.status;
const dlc = (state: RootState) => state.order.dlcrates

export function* orderSaga() {
    yield takeEvery(OrderActionType.FETCH_RATE, getRate);
    yield takeEvery(OrderActionType.ACCEPT_ORDER, acceptOrder)
    yield takeEvery(OrderActionType.FETCH_ORDER_BY_ID, getOrderById)
}

function* getRate() {
    try {
        const item:IRate[] = yield call(orderApi.get)
        yield put(SetRateAction(item))
    } catch(err) {
        console.log(err)
    }
}

function* getOrderById({payload}: IFetchOrderByIdA) {
    try {
        const order:PostState = yield call(orderApi.getById, payload);
        const dlcrates:IDlcRate[] = yield select(dlc)
        if(order.id) {
            yield put(SetNumberOrderAction(order.id))
            yield put(ChoseCarAction(order.carId))
            yield put(ChoseCityAction(order.cityId))
            yield put(ChosePlaceAction(order.pointId))
            yield put(ChoseDateFrom(new Date(order.dateFrom)))
            yield put(ChoseDateTo(new Date(order.dateTo)))
            if(order.color !== 'any') {
                yield put(ChoseColorAction(order.color))
            }
            yield put(ChoseRateAction(order.rateId))
            if(order.isFullTank) {
                yield put(ChoseDlcRatesAction({
                    ...dlcrates[0],
                    isPresent: true
                }))
            }
            if(order.isNeedChildChair) {
                yield put(ChoseDlcRatesAction({
                    ...dlcrates[1],
                    isPresent: true
                }))
            }
            if(order.isRightWheel) {
                yield put(ChoseDlcRatesAction({
                    ...dlcrates[2],
                    isPresent: true
                }))
            }
            yield put(SetPriceAction(order.price))
        }
    }catch(err) {
        console.log(err)
    }
}


function* acceptOrder() {
    try {
        const order: OrderState = yield select(getOrder)
        const status: StatusState = yield select(getStatus)
        const result: PostState = {
            orderStatusId: {
                id: status.status[0].id ? status.status[0].id : ''
            },
            cityId: order.choseCity!.city,
            pointId: order.choseCity!.address,
            carId: order.choseCar!,
            color: order.choseDLC?.color ? order.choseDLC?.color : 'any',
            dateFrom: Number(order.choseDLC!.startDate),
            dateTo: Number(order.choseDLC?.returnDate),
            rateId: order.choseDLC!.choseRate,
            price: order.price,
            isFullTank: order.choseDLC?.dlc?.fullOil ? true : false,
            isNeedChildChair: order.choseDLC?.dlc?.babySeat ? true : false,
            isRightWheel: order.choseDLC?.dlc?.rightDrive ? true : false
        }
        const item : PostState= yield call(orderApi.create, result)
        if(item.id) {
            yield put(ChoseStatusAction(item.orderStatusId))
            yield put(SetNumberOrderAction(item.id))
        }
    } catch(err) {
        console.log(err)
    }
}
