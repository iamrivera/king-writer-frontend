export default function photosReducer(state = [], action) {
  switch (action.type) {
    case "GET_PHOTOS_SUCCESS":
      return [...state, action.payload];

    default:
      return state;
  }
}
