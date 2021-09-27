export default function photosReducer(state = [], action) {
  switch (action.type) {
    case "GET_PHOTOS_REQUEST":
      return [...action.payload];

    default:
      return state;
  }
}
