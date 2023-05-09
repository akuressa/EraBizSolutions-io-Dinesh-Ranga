import doctorReducer from './reducers';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    doctorReducer,
});

export default RootReducer;