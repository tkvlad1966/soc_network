const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
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
    profile: null
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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default: return state;
    }

}

export default profileReducer;