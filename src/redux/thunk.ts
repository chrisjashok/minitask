import { LoginCredentials } from "./types";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  homeSuccess,
  homeRequest,
  homeSearch,
} from "./actions";
import api from "../utils/api";
import Consts from "../utils/Consts";

export const LoginUser = (credentials: LoginCredentials) => {
  return async (dispatch: any) => {
    dispatch(loginRequest());
    try {
      const response = await api.post(Consts.Login_Api, credentials);
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("isLogin", "true");
      dispatch(loginSuccess(response?.data?.token));
    } catch (error: any) {
      alert("please verify your username or password");
      dispatch(loginFailure(error));
    }
  };
};

export const getHomedata = () => {
  return async (dispatch: any) => {
    dispatch(homeRequest());
    try {
      const response = await api.get(Consts.User_Api);
      dispatch(homeSuccess(response?.data));
    } catch (error: any) {}
  };
};

export const getDatabysearch = (params?: any) => {
  const { data, searchValue } = params;
  return async (dispatch: any) => {
    try {
      const matchedUsers = data?.data.filter(
        (user:any) =>
          user.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(searchValue.toLowerCase())
      );
      // console.log('matchedUsers',JSON.stringify(data))
      dispatch(homeSearch(matchedUsers))
    } catch (error: any) {
      console.log("state error", error);
    }
  };
};

export const getDatabyPage = (pageNo: number) => {
  return async (dispatch: any) => {
    dispatch(homeRequest());
    try {
      const response = await api.get(`${Consts.User_Api}?page=${pageNo}`);
      dispatch(homeSuccess(response?.data));
    } catch (error: any) {}
  };
};
