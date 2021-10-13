import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import { Countries } from "./reducers/countries";
import { Theme } from "./reducers/theme";
import { Filter } from "./reducers/filter";

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      countries: Countries,
      theme: Theme,
      filter: Filter,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export const store = ConfigureStore();
