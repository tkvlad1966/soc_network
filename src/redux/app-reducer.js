const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_IN_PROGRESS = 'TOOGLE_IS_FOLLOWING_IN_PROGRESS';
const TOOGLE_IS_UNFOLLOWING_IN_PROGRESS = 'TOOGLE_IS_UNFOLLOWING_IN_PROGRESS';

export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });
export const toogleFollowingProgress = (userId) => ({ type: TOOGLE_IS_FOLLOWING_IN_PROGRESS, userId });
export const toogleUnFollowingProgress = (userId) => ({ type: TOOGLE_IS_UNFOLLOWING_IN_PROGRESS, userId });

let initialState = {
    isFetching: false,
    folloWingInProgress: []
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOOGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOOGLE_IS_FOLLOWING_IN_PROGRESS: {

            return {
                ...state,
                folloWingInProgress: [...state.folloWingInProgress, action.userId],
            }
        }
        case TOOGLE_IS_UNFOLLOWING_IN_PROGRESS: {

            return {
                ...state,
                folloWingInProgress: state.folloWingInProgress.filter(userId => userId != action.userId),
            }
        }
        default: return state;
    }

}

export default appReducer;