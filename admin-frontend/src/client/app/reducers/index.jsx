import { combineReducers } from 'redux';
import tempReducer from './temp.jsx';
const allReducers = combineReducers({
  temp: tempReducer
});

export default allReducers;
