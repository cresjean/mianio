
export default function(state={articles: []}, action) {
  switch (action.type) {
    case 'ARTICLES_LOADED':
      return { articles: action.articles};
      break;
    default:
      return state;
  }
}
