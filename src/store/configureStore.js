// eslint-disable-next-line no-unused-vars
import { createStore } from "redux";
import rootReducer from "../reducers/root-reducer";

export default () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
