import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducers from "./MainReducer";
const combinedReducer = combineReducers(reducers);
export const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
