export default function postsReducer(state = [], action) {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return [...action.payload];

    case "POST_POST_REQUEST":
      return [...state, action.payload];

    case "DELETE_POST_REQUEST":
      return [...state.filter(post => post.id !== action.payload.post.id)]

    default:
      return state;
  }
}


