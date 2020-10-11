import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../Components/common/api";
import { PhotosType, PostType, ProfileType } from "../type";
import { toogleIsFetching } from "./app-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "ПРивіт", likeCount: 3 },
    { id: 2, message: "Як справи", likeCount: 2 },
    { id: 3, message: "Зустрінемося? kjjacjbbadj sdhjh acgkj", likeCount: 3 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "" as string | null,
};

export type initialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): initialStateType => {
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
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPost: string;
};

export const addPost = (newPost: string): AddPostActionType => ({
  type: ADD_POST,
  newPost,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status?: string;
};

export const setStatus = (status: string): SetStatusActionType => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfileThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.getUserProfile(userId);
    dispatch(toogleIsFetching(false));
    dispatch(setUserProfile(response));
  };
};
export const getStatusThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.getStatus(userId);
    dispatch(toogleIsFetching(false));
    dispatch(setStatus(response.data));
  };
};
export const updateStatusThunkCreator = (status: string) => {
  return async (dispatch: any) => {
    dispatch(toogleIsFetching(true));
    const response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(toogleIsFetching(false));
      dispatch(setStatus(status));
    }
  };
};

export const savePhotoThunkCreator = (file: any) => async (dispatch: any) => {
  dispatch(toogleIsFetching(true));
  const response = await ProfileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(toogleIsFetching(false));
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfileThunkCreator = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId;
  dispatch(toogleIsFetching(true));
  const response = await ProfileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(toogleIsFetching(false));
    dispatch(getUserProfileThunkCreator(userId));
  } else {
    dispatch(toogleIsFetching(false));
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("edit-profile", { _error: message }));
  }
};

export default profileReducer;
