import { Images } from "../images";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    };
};

let initialState = {
    dialogs: [
        { id: 1, name: 'Vlad', src: Images.logo },
        { id: 2, name: 'Artem', src: Images.logo },
        { id: 3, name: 'Tanja', src: Images.logo },
        { id: 4, name: 'Tetyana', src: Images.logo },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How our you' },
        { id: 3, message: 'Ok' },
        { id: 4, message: 'Yo' },
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = { id: 5, message: state.newMessageText };
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(message);
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: return state;
    }

}

export default dialogsReducer;