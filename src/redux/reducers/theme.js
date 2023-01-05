import * as Types from "../actions/ActionTypes";

export const Theme = (
  state = {
    current: "light",
  },
  action
) => {
  switch (action.type) {
    case Types.CHANGE_THEME: {
      return { current: action.payload };
    }
    default:
      return state;
  }
};
