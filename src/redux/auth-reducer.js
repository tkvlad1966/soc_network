const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (userId, login, email) => (
    { type: SET_USER_DATA, data: { userId, login, email } });

let initialState = {
    userId: null,
    login: null,
    email: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return (
                {
                    ...state,
                    ...action.data
                }
            )
        }

        default: return state;
    }
}

export default authReducer;