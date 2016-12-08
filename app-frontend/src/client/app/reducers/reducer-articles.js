import {ARTICLES_LOADED} from '../actions/index.js';

export default function(state={articles: []}, action) {
  switch (action.type) {
    case ARTICLES_LOADED:
      console.debug(ARTICLES_LOADED);
      return { articles: action.articles};
      break;
    default:
      return state;
  }
}
