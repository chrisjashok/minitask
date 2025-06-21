import { HOME_DATA_FAILURE, HOME_DATA_REQUEST, HOME_DATA_SEARCH, HOME_DATA_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";

// Login page Actions 
export const loginRequest = () => ({
  type: LOGIN_REQUEST as typeof LOGIN_REQUEST,
});

export const loginSuccess = (token: any) => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE as typeof LOGIN_FAILURE,
  payload: error,
});


// Home page Actions
export const homeRequest = () => ({
  type: HOME_DATA_REQUEST as typeof HOME_DATA_REQUEST,
});

export const homeSuccess = (data: any) => ({
  type: HOME_DATA_SUCCESS as typeof HOME_DATA_SUCCESS,
  payload: data,
});

export const homeSearch = (searchedData: any) => ({
  type: HOME_DATA_SEARCH as typeof HOME_DATA_SEARCH,
  payload: searchedData,
});

export const homeFailure = (error: string) => ({
  type: HOME_DATA_FAILURE as typeof HOME_DATA_FAILURE,
  payload: error,
});

export type LoginAction = ReturnType<typeof loginRequest> | ReturnType<typeof loginSuccess> | ReturnType<typeof loginFailure>;

export type homeAction = ReturnType<typeof homeRequest> | ReturnType<typeof homeSuccess> | ReturnType<typeof homeSearch> | ReturnType<typeof homeFailure>;

