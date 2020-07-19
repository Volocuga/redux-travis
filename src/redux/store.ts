import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import profileReducer from "./reducers";

const rootReducer = combineReducers({ profile: profileReducer });
const enhancers = composeWithDevTools();
const store = createStore(rootReducer, enhancers);

export default store;
