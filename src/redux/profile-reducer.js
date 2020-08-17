const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

let initialState = {
    posts:
        [
            { id: 1, message: 'ПРивіт', likeCount: 3 },
            { id: 2, message: 'Як справи', likeCount: 2 },
            { id: 3, message: 'Зустрінемося? kjjacjbbadj sdhjh acgkj', likeCount: 3 },
        ],
    newPostText: 'aaa'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { id: 5, message: state.newPostText, likeCount: 0 };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(post);

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: return state;
    }

}

export default profileReducer;