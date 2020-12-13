import { combineReducers } from 'redux';
import certsReducer from './certsReducer'

export default combineReducers({
    certs: certsReducer
});