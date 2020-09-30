import { AuthAPI, ProfileAPI, securityAPI } from "../Components/common/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PFOTOS = "SET_USER_PFOTOS";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  login: null,
  email: null,
  photos: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

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
  payload: { userId, login, email, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
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

export const login = (email, password, remembreMe, captcha) => {
  return async (dispatch) => {
    const response = await AuthAPI.login(email, password, remembreMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
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
