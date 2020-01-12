/* eslint-disable no-undef */
import formReducer from "./form-reducer";

describe("formReducer", () => {
  it("should use default state if no type does not exist", () => {
    const wrongType = { type: "NO_TYPE" };
    expect(formReducer(undefined, wrongType)).toEqual({
      display: "",
      email: "",
      password: ""
    });
  });
});
