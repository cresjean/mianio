export const enterSearch = (input) => {
  console.log(input.target.value);
  return {
    type: "ENTER_SEARCH",
    payload: input.target.value
  }
}
