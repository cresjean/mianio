import {CLICK_ARTIST} from '../actions/index.js';

export default function(state={}, action) {
  switch (action.type) {
    case CLICK_ARTIST:
      return { artistAlbums: action.albums};
      break;
    default:
      return state;
  }
}
