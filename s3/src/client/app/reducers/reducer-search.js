import {ENTER_SEARCH} from '../actions/index.js';

export default function(state={}, action) {
  switch (action.type) {
    case ENTER_SEARCH:
      return { searchinput: action.payload, searchresult: action.result }
      break;
    default:
      console.debug("Me");
      return state;
  }
}
