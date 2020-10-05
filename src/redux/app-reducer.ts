import { getAuthUserData } from "./auth-reducer";

const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_IN_PROGRESS = "TOOGLE_IS_FOLLOWING_IN_PROGRESS";
const TOOGLE_IS_UNFOLLOWING_IN_PROGRESS = "TOOGLE_IS_UNFOLLOWING_IN_PROGRESS";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type UserId = number | null;

export type InitialStateType = {
  isFetching?: boolean;
  folloWingInProgress: Array<UserId>;
  initialized?: boolean;
};

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

type toogleIsFetchingActionType = {
  type: typeof TOOGLE_IS_FETCHING;
  isFetching: toogleIsFetchingDataActionType;
};

type toogleIsFetchingDataActionType = {
  isFetching: boolean;
};

type toogleFollowingProgressActionType = {
  type: typeof TOOGLE_IS_FOLLOWING_IN_PROGRESS;
  userId: toogleFollowingDataActionType;
};

type toogleFollowingDataActionType = {
  userId: UserId;
};

type toogleUnFollowingProgressActionType = {
  type: typeof TOOGLE_IS_UNFOLLOWING_IN_PROGRESS;
  userId: toogleFollowingDataActionType;
};

let InitialState: InitialStateType = {
  isFetching: false,
  folloWingInProgress: [],
  initialized: false,
};

export const toogleIsFetching = (
  isFetching: toogleIsFetchingDataActionType
): toogleIsFetchingActionType => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});

export const toogleFollowingProgress = (
  userId: toogleFollowingDataActionType
): toogleFollowingProgressActionType => ({
  type: TOOGLE_IS_FOLLOWING_IN_PROGRESS,
  userId,
});

export const toogleUnFollowingProgress = (
  userId: toogleFollowingDataActionType
): toogleUnFollowingProgressActionType => ({
  type: TOOGLE_IS_UNFOLLOWING_IN_PROGRESS,
  userId,
});

export const initializedSuccess = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

const appReducer = (state = InitialState, action: any): InitialStateType => {
  switch (action.type) {
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOOGLE_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        folloWingInProgress: [...state.folloWingInProgress, action.userId],
      };
    }
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    case TOOGLE_IS_UNFOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        folloWingInProgress: state.folloWingInProgress.filter(
          (userId) => userId !== action.userId
        ),
      };
    }
    default:
      return state;
  }
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
