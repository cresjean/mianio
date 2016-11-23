import { combineReducers } from 'redux';
import NavBarReducer from './reducer-navbar';

const allReducers = combineReducers({
  navbar: NavBarReducer
});

export default allReducers;
