import  { combineReducers } from 'redux';
import { langReducer } from './lang/reduce';
import { orderReducer } from './order/reduce';


export const rootReducer = combineReducers({
    lang: langReducer,
    order: orderReducer
})