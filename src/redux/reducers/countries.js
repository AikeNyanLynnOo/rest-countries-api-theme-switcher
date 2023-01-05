import * as Types from "../actions/ActionTypes";

export const Countries = (
  state = {
    errMessage: null,
    isLoading: false,
    countries: [],
  },
  action
) => {
  switch (action.type) {
    case Types.COUNTRIES_LOADING:
      return { errMessage: null, isLoading: true, countries: [] };
    case Types.COUNTRIES_SUCCESS:
      return { errMessage: null, isLoading: false, countries: action.payload };
    case Types.COUNTRIES_FAILED:
      return { errMessage: action.payload, isLoading: false, countries: [] };
    default:
      return state;
  }
};
