export const titleAction = (value = "") => ({
  type: "POST_TITLE",
  value
});

export const authorAction = (value = "") => ({
  type: "POST_AUTHOR",
  value
});

export const bodyAction = (value = "") => ({
  type: "POST_BODY",
  value
});
