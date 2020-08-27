import { API } from "../Components/common/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PFOTOS = 'SET_USER_PFOTOS';



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

export const setAuthUserData = (userId, login, email) => (
    { type: SET_USER_DATA, data: { userId, login, email } });
export const setUserPhotos = (photos) => (
    { type: SET_USER_PFOTOS, photos });

export const getAuthUserData = () => {
    return (dispatch) => {
        API.getAuthorization().then((response) => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, login, email));
                API.getUserProfile(id).then((data) => {
                    dispatch(setUserPhotos(data.photos.small));
                });
            }
        });
    }
}
export default authReducer;