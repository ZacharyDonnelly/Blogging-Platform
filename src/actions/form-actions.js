export const emailAction = (value = "") => ({
  type: "LOGIN_EMAIL",
  value
});

export const passwordAction = (value = "") => ({
  type: "LOGIN_PASSWORD",
  value
});

export const displayAction = (value = "") => ({
  type: "LOGIN_DISPLAY",
  value
});

export const tokenAction = (value = {}) => ({
  type: "USER_TOKEN",
  value
});
