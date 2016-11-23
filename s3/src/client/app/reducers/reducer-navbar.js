export default function(state={}, action) {
  switch (action.type) {
    case 'ENTER_SEARCH':
      return { searchinput: action.payload }
      break;
    default:
      return {
        searchinput: 'welcome to mianio'
      }
  }
}
