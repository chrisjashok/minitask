import { LoginState } from "./types";
import { AnyAction } from "redux";

const initialState: LoginState = {
  loading: false,
  token: null,
  error: null,
};

const loginReducer = (
  state: LoginState = initialState,
  action: AnyAction
): LoginState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state };
    case "LOGIN_SUCCESS":
      return { ...state, token: action?.payload, loading: false };
    case "LOGIN_FAILURE":
      return { ...state, token: null, loading: false };
    default:
      return state;
  }
};

export default loginReducer;
