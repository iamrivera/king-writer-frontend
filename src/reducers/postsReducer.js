export default function postsReducer(state = [], action) {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return [...action.payload];

    case "POST_POST_REQUEST":
      return [...state];

    default:
      return state;
  }
}
