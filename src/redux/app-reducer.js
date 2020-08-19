const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }

}

export default appReducer;