import { combineReducers } from 'redux';
import SearchReducer from './reducer-search';
import ResultReducer from './reducer-result';

const allReducers = combineReducers({
  search: SearchReducer,
  result: ResultReducer
});

export default allReducers;
