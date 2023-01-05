import * as Types from "../actions/ActionTypes";

export const Filter = (
  state = {
    current: "",
  },
  action
) => {
  switch (action.type) {
    case Types.SET_FILTER:
      return {
        current: action.payload,
      };
    default:
      return state;
  }
};
