import { combineReducers } from "redux";

import formReducer from "./form-reducer";
import postReducer from "./post-reducer";

const rootReducer = combineReducers({
  login: formReducer,
  post: postReducer
});
export default rootReducer;
