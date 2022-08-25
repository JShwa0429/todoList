import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataReducer, inputReducer } from "./slices";

const rootReducer = combineReducers({
  input: inputReducer,
  data: dataReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
