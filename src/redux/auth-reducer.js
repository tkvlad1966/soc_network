import { AuthAPI, ProfileAPI } from "../Components/common/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PFOTOS = "SET_USER_PFOTOS";

let initialState = {
  userId: null,
  login: null,
  email: null,
  photos: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SET_USER_PFOTOS: {
      return {
        ...state,
        photos: action.photos,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, email, isAuth },
});
export const setUserPhotos = (photos) => ({ type: SET_USER_PFOTOS, photos });

export const getAuthUserData = () => {
  return async (dispatch) => {
    const response = await AuthAPI.getAuthorization();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
      ProfileAPI.getUserProfile(id).then((data) => {
        dispatch(setUserPhotos(data.photos.small));
      });
    }
  };
};

export const login = (email, password, remembreMe) => {
  return async (dispatch) => {
    const response = await AuthAPI.login(email, password, remembreMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};
export default authReducer;
