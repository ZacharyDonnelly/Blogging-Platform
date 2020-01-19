import { createStore } from "redux";
import rootReducer from "../reducers/root-reducer";

export default () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  // store.subscribe(() => {
  //   const { login } = store.getState();
  //   localStorage.setItem("persisted", JSON.stringify({ login }));
  // });
  return store;
};
