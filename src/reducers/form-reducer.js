const formReducer = (
  state = { email: "", password: "", display: "" },
  action
) => {
  switch (action.type) {
    case "LOGIN_EMAIL":
      return { ...state, email: action.value };
    case "LOGIN_PASSWORD":
      return { ...state, password: action.value };
    case "LOGIN_DISPLAY":
      return { ...state, display: action.value };
    case "USER_TOKEN":
      return { ...state, value: action.value };
    default:
      return state;
  }
};

export default formReducer;
