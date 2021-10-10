import * as Types from "./ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import axios from "axios";

// Theme
export const changeTheme = (theme) => {
  return {
    type: Types.CHANGE_THEME,
    payload: theme,
  };
};

// countries
export const fetchCountries = () => (dispatch) => {
  dispatch(countriesLoading());
  axios
    .get(baseUrl + "/all")
    .then((res) => {
      dispatch(countriesSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(countriesFailed(err.message));
    });
};

export const countriesLoading = () => {
  return {
    type: Types.COUNTRIES_LOADING,
  };
};
export const countriesFailed = (errMsg) => {
  return {
    type: Types.COUNTRIES_FAILED,
    payload: errMsg,
  };
};
export const countriesSuccess = (data) => {
  return {
    type: Types.COUNTRIES_SUCCESS,
    payload: data,
  };
};
