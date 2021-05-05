import  { combineReducers } from 'redux';
import { cityReducer } from './city/reduce';
import { langReducer } from './lang/reduce';
import { orderReducer } from './order/reduce';
import {pointReduce} from './point/reduce';


export const rootReducer = combineReducers({
    lang: langReducer,
    order: orderReducer,
    city: cityReducer,
    point: pointReduce
})