import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import postsReducer from "./postsReducer";
import quotesReducer from "./quotesReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  quotes: quotesReducer,
  photos: photosReducer,
});

export default rootReducer;