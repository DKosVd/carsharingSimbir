import  { combineReducers } from 'redux';
import { carsReducer } from './cars/reduce';
import { cityReducer } from './city/reduce';
import { langReducer } from './lang/reduce';
import { orderReducer } from './order/reduce';
import {pointReduce} from './point/reduce';
import { statusReduce } from './status/reduce';


export const rootReducer = combineReducers({
    lang: langReducer,
    order: orderReducer,
    city: cityReducer,
    point: pointReduce,
    cars: carsReducer,
    status: statusReduce
})