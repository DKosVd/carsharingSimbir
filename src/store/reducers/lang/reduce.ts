import { LangAction, LangActionType } from '../../actions/lang/lang';
import { LangState } from './contracts/state';
import translations from './translate/translate';


const initialState: LangState = {
    lang: 'Eng',
    text: translations['Eng']
}

export const langReducer = (state = initialState, action: LangAction) => {
    switch (action.type) {
        case LangActionType.CHANGE_LANG:
            return {
                lang: action.payload,
                text: translations[action.payload]
            }
        default: 
            return state;
    }
}