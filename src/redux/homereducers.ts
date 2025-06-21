import { HomeState } from "./types";
import { AnyAction } from "redux";

const initialState: HomeState = {
  loading: false,
  data: null,
  searchedData: null,
  total_pages: 0,
  error: null,
};

const homeReducer = (
  state: HomeState = initialState,
  action: AnyAction
): HomeState => {
  switch (action.type) {
    case "HOME_DATA_REQUEST":
      return { ...state, loading: true };
    case "HOME_DATA_SUCCESS":
      return { ...state, data: action?.payload, loading: false };
    case "HOME_DATA_SEARCH":
      const Totalpages =
        action?.payload?.data?.length == 6 ? action?.payload?.total_pages : 1;
      return {
        ...state,
        data: { ...state.data, data: action?.payload, total_pages: Totalpages },
        loading: false,
      };
    case "HOME_DATA_FAILURE":
      return { ...state, data: null, loading: false };
    default:
      return state;
  }
};

export default homeReducer;
