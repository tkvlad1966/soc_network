import { ProfileAPI } from '../Components/common/api';
import { toogleIsFetching } from './app-reducer';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    };
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


let initialState = {
    posts:
        [
            { id: 1, message: 'ПРивіт', likeCount: 3 },
            { id: 2, message: 'Як справи', likeCount: 2 },
            { id: 3, message: 'Зустрінемося? kjjacjbbadj sdhjh acgkj', likeCount: 3 },
        ],
    newPostText: 'aaa',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { id: 5, message: state.newPostText, likeCount: 0 };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
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
        default: return state;
    }

}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        ProfileAPI.getUserProfile(userId).then((data) => {
            dispatch(toogleIsFetching(false));
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        ProfileAPI.getStatus(userId).then((response) => {
            dispatch(toogleIsFetching(false));
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        ProfileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(toogleIsFetching(false));
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;