import { combineReducers } from "redux";

const initialState = {};

const userReducer = (state = initialState) => {
  return state;
};

const postsReducer = (state = initialState) => {
  return state;
};

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
});
