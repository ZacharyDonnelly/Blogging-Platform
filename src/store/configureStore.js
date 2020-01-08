// eslint-disable-next-line no-unused-vars
import { createStore } from "redux";
import formReducer from "../reducers/form-reducer";

export default () => {
  const store = createStore(
    formReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
