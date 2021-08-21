import { combineReducers } from "redux";

import posts from "./posts";
import auth from './auth';

/**It combines all reducers together */
export default combineReducers({
  posts: posts,
  auth: auth,
});
