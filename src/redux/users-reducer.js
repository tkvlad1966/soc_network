import { Images } from "../images";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
// const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

export const follow = (usersid) => ({ type: FOLLOW, usersid });
export const unfollow = (usersid) => ({ type: UNFOLLOW, usersid });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalCountUsers = (totalCountUsers) => ({ type: SET_TOTAL_COUNT_USERS, totalCountUsers });
// export const toogleIsFetchingAC = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });

let initialState = {
    users: [],
    totalCountUsers: 0,
    currentPage: 1,
    sizePage: 6,
    // isFetching: false
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
        // case TOOGLE_IS_FETCHING: {

        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        // }
        default: return state;
    }

}

export default usersReducer;