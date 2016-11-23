export const enterSearch = (input) => {
  return {
    type: "ENTER_SEARCH",
    payload: input.target.value
  }
}
