import { combineReducers } from 'redux';
import contactReducer from './contact';
import listReducer from './list';
import alertReducer from './alert';
import loaderReducer from './loader';

const rootReducer = combineReducers({
   contact: contactReducer,
   list: listReducer,
   alert: alertReducer,
   loader: loaderReducer
});

export default rootReducer;