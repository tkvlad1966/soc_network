import { AuthAPI, ProfileAPI, securityAPI } from "../Components/common/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PFOTOS = "SET_USER_PFOTOS";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

export type initialStateType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  photos: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState: initialStateType = {
  userId: null,
  login: null,
  email: null,
  photos: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): initialStateType => {
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

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

type SetUserPhotosActionType = {
  type: typeof SET_USER_PFOTOS;
  photos: string;
};

export const setUserPhotos = (photos: string): SetUserPhotosActionType => ({
  type: SET_USER_PFOTOS,
  photos,
});

export const getAuthUserData = () => {
  return async (dispatch: any) => {
    const response = await AuthAPI.getAuthorization();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
      ProfileAPI.getUserProfile(id).then((data: any) => {
        dispatch(setUserPhotos(data.photos.small));
      });
    }
  };
};

export const login = (
  email: string,
  password: string,
  remembreMe: boolean,
  captcha: string
) => {
  return async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => {
  return async (dispatch: any) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};
export default authReducer;
