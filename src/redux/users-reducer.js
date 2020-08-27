import { toogleIsFetching, toogleFollowingProgress, toogleUnFollowingProgress } from "./app-reducer";
import { API } from '../Components/common/api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';

export const follow = (usersid) => ({ type: FOLLOW, usersid });
export const unfollow = (usersid) => ({ type: UNFOLLOW, usersid });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalCountUsers = (totalCountUsers) => ({ type: SET_TOTAL_COUNT_USERS, totalCountUsers });

let initialState = {
    users: [],
    totalCountUsers: 0,
    currentPage: 1,
    sizePage: 6,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersid) {
                        return (
                            { ...u, followed: true })
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersid) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {

            return {
                ...state,
                users: [...action.users],
            }

        }

        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT_USERS: {

            return {
                ...state,
                totalCountUsers: action.totalCountUsers
            }
        }
        default: return state;
    }
}

export const getUsersThunkCreator = (currentPage, sizePage) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        API.getUsers({
            page: currentPage,
            count: sizePage,
        }).then((data) => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCountUsers(data.totalCount));
        });
    }
}

export const onClickFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toogleFollowingProgress(userId));
        try {
            const response = await API.postFollow(userId);
            if (response.data.resultCode === 0) {
                dispatch(follow(userId));
            }
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            dispatch(toogleUnFollowingProgress(userId));
        }
    };
}

export const onClickOnUnFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(userId));
        API.delFollow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
            })
            .catch((error) => {
                console.log('unfollow error', error);
            })
            .finally(() => {
                dispatch(toogleUnFollowingProgress(userId));
            });
    };
}

export default usersReducer;