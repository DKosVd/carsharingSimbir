import  { combineReducers } from 'redux';
import { langReducer } from './lang/reduce';


export const rootReducer = combineReducers({
    lang: langReducer
})