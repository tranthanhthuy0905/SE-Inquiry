
import {combineReducers} from 'redux';
import textReducer from './PreviewText/PreviewTextReducer';
import LeftMenuReducer from './CreatePage/LeftMenuReducer';

const rootReducer = combineReducers({
    text: textReducer,
    leftMenu: LeftMenuReducer
})

export default rootReducer
