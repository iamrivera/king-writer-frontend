export default function quotesReducer(state = [], action) {
  switch (action.type) {
    case "GET_QUOTES_REQUEST":
      return [...action.payload];

    default:
      return state;
  }
}
