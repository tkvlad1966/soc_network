const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PFOTOS = 'SET_USER_PFOTOS';

export const setAuthUserData = (userId, login, email) => (
    { type: SET_USER_DATA, data: { userId, login, email } });
export const setUserPhotos = (photos) => (
    { type: SET_USER_PFOTOS, photos });

let initialState = {
    userId: null,
    login: null,
    email: null,
    photos: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return (
                {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
            )
        }
        case SET_USER_PFOTOS: {
            return (
                {
                    ...state,
                    photos: action.photos,

                }
            )
        }
        default: return state;
    }
}

export default authReducer;