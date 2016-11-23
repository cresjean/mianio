export default function(state=null, action) {
  console.log(action);
  switch (action.type) {
    case 'ENTER_SEARCH':
      return { searchinput: action.payload }
      break;
    default:
    return {
      searchinput: 'hi there again'
    }
  }


}
