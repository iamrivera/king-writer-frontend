export default function postsReducer(state = [], action) {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return [...action.payload];

    default:
      return state;
  }
}
