import {
  toogleIsFetching,
  toogleFollowingProgress,
  toogleUnFollowingProgress,
} from "./app-reducer";
import { UserAPI } from "../Components/common/api";
import { UserType } from "../type";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";

let initialState = {
  users: [] as Array<UserType>,
  totalCountUsers: 0,
  currentPage: 1,
  sizePage: 6,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_COUNT_USERS: {
      return {
        ...state,
        totalCountUsers: action.totalCountUsers,
      };
    }
    default:
      return state;
  }
};

type FollowActionType = {
  type: typeof FOLLOW;
  userid: number;
};

export const follow = (userid: number): FollowActionType => ({
  type: FOLLOW,
  userid,
});

type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userid: number;
};

export const unfollow = (userid: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userid,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

type SetTotalCountUsersActionType = {
  type: typeof SET_TOTAL_COUNT_USERS;
  totalCountUsers: number;
};

export const setTotalCountUsers = (
  totalCountUsers: number
): SetTotalCountUsersActionType => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCountUsers,
});

export const getUsersThunkCreator = (currentPage: number, sizePage: number) => {
  return async (dispatch: any) => {
    dispatch(toogleIsFetching(true));
    const response = await UserAPI.getUsers({
      page: currentPage,
      count: sizePage,
    });
    dispatch(toogleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCountUsers(response.totalCount));
  };
};

export const onClickFollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toogleFollowingProgress(userId));
    try {
      const response = await UserAPI.postFollow(userId);
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      dispatch(toogleUnFollowingProgress(userId));
    }
  };
};

export const onClickUnFollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toogleFollowingProgress(userId));
    try {
      const response = await UserAPI.delFollow(userId);
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
    } catch (error) {
      console.log("unfollow error", error);
    } finally {
      dispatch(toogleUnFollowingProgress(userId));
    }
  };
};

export default usersReducer;
