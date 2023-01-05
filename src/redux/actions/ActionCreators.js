import * as Types from "./ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import axios from "axios";

// Search
export const searchByName = (input) => (dispatch) => {
  const append = input === "" ? "/all" : "/name/" + input;
  dispatch(countriesLoading());
  axios
    .get(baseUrl + append)
    .then((res) => {
      dispatch(countriesSuccess(res.data));
    })
    .catch((err) => {
      if (+err.response.status === 404) {
        dispatch(countriesFailed("No Country Found"));
      } else {
        dispatch(countriesFailed(err.message));
      }
    });
};
// Filter
export const setFilter = (filter) => {
  return {
    type: Types.SET_FILTER,
    payload: filter,
  };
};

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
      dispatch(countriesFailed(err.message));
    });
};
export const fetchWithRegion = (region) => (dispatch) => {
  dispatch(countriesLoading());
  dispatch(setFilter(region));
  if (region === "All") {
    dispatch(fetchCountries());
  } else {
    axios
      .get(baseUrl + "/region/" + region)
      .then((res) => {
        dispatch(countriesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(countriesFailed(err.message));
      });
  }
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
