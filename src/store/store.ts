import { applyMiddleware, compose, createStore } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { CityState } from './reducers/city/contracts/state';
import { LangState } from './reducers/lang/contracts/state';
import { OrderState } from './reducers/order/contracts/state';
import { PointState } from './reducers/point/contracts/state';
import rootSaga from './sagas';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const saga = CreateSagaMiddleware();


export interface RootState {
    lang: LangState,
    order: OrderState,
    city: CityState,
    point: PointState
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))

saga.run(rootSaga)