import fetch from 'isomorphic-fetch';
export const ENTER_SEARCH = 'ENTER_SEARCH';
export const REQUEST_GETS = 'REQUEST_GETS';
export const RECEIVE_GETS = 'RECEIVE_GETS';
export const CLICK_ARTIST = 'CLICK_ARTIST';
export const ARTICLES_LOADED = 'ARTICLES_LOADED';


// action creators
const returnLoadArticles = (json) => {
  return {
    type: ARTICLES_LOADED,
    articles: json
  }
}
export const loadArticles = () => {
  return dispatch => {
    return fetch(`api/articles`)
    .then(response => response.json())
    .then(json => dispatch(returnLoadArticles(json)))
  }
}

export const clickArtist = (clicked) => {
  return dispatch => {
      return fetch(`https://api.spotify.com/v1/artists/${clicked}/albums`)
      .then(response => response.json())
      .then(json => dispatch(returnClickArtist(json)))
  }
}

const returnClickArtist = (json) => {
  return {
    type: CLICK_ARTIST,
    albums: json.items
  }
}

const returnEnterSearch = (json) => {
  return {
    type: ENTER_SEARCH,
    payload: json.searchTerm,
    result: json.artists.items
  }
}

export const fetchSearch = (input) => {

    if (input) {

      return dispatch => {
        return fetch(`https://api.spotify.com/v1/search?type=artist&q=${input}`)
        .then(response => response.json())
        .then(json => dispatch(returnEnterSearch(Object.assign({}, {searchTerm: input}, json))));
      }
    }
    else {
      return returnEnterSearch({searchTerm: '', artists: {items: []}})
    }

}
