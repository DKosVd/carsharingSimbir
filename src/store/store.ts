import { applyMiddleware, compose, createStore } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { LangState } from './reducers/lang/contracts/state';
import rootSaga from './sagas';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const saga = CreateSagaMiddleware();


export interface RootState {
    lang: LangState
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))

saga.run(rootSaga)