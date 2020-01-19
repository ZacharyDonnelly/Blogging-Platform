const postReducer = (state = { title: "", body: "", author: "" }, action) => {
  switch (action.type) {
    case "POST_TITLE":
      return {
        ...state,
        title: action.value
      };
    case "POST_BODY":
      return {
        ...state,
        body: action.value
      };
    case "POST_AUTHOR":
      return {
        ...state,
        author: action.value
      };
    default:
      return state;
  }
};

export default postReducer;
