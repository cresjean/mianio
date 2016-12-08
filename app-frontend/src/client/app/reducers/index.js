import { combineReducers } from 'redux';
import SearchReducer from './reducer-search';
import ResultReducer from './reducer-result';
import ArticlesReducer from './reducer-articles';
const allReducers = combineReducers({
  search: SearchReducer,
  result: ResultReducer,
  articles: ArticlesReducer
});

export default allReducers;
