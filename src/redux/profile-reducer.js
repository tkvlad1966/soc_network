import { ProfileAPI } from "../Components/common/api";
import { toogleIsFetching } from "./app-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export const addPost = (post) => ({ type: ADD_POST, newPost: post });

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos: photos,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

let initialState = {
  posts: [
    { id: 1, message: "ПРивіт", likeCount: 3 },
    { id: 2, message: "Як справи", likeCount: 2 },
    { id: 3, message: "Зустрінемося? kjjacjbbadj sdhjh acgkj", likeCount: 3 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = { id: 5, message: action.newPost, likeCount: 0 };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(post);
      return stateCopy;
    }

    case SET_STATUS: {
      let stateCopy = { ...state };
      stateCopy.status = action.status;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};

export const getUserProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.getUserProfile(userId);
    dispatch(toogleIsFetching(false));
    dispatch(setUserProfile(response));
  };
};
export const getStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.getStatus(userId);
    dispatch(toogleIsFetching(false));
    dispatch(setStatus(response.data));
  };
};
export const updateStatusThunkCreator = (status) => {
  return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(toogleIsFetching(false));
      dispatch(setStatus(status));
    }
  };
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  dispatch(toogleIsFetching(true));
  const response = await ProfileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(toogleIsFetching(false));
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
