import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./loginreducres";
import homeReducer from "./homereducers";

export const store = configureStore({
  reducer: {
    login: loginReducers,
    home: homeReducer
  },
});
