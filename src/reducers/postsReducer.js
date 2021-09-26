export default function postsReducer(state = [], action) {
    switch (action.type) {
      case "GET_POSTS_SUCCESS":
        return [...state, action.payload];
  
      default:
        return state;
    }
  }
  