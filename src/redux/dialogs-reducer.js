import { Images } from "../images";

const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,
  newMessage: text,
});

// type UserType = {
//   id: null | Number,
//   name: string | null,
//   src: Images.logo,
// };

// type UserMessageType = {
//   id: null | Number,
//   message?: string,
// };

// let initialState = {
//     dialogs: [] as ,
//     messages: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "How our you" },
//       { id: 3, message: "Ok" },
//       { id: 4, message: "Yo" },
//     ],
//   };

let initialState = {
  dialogs: [
    { id: 1, name: "Vlad", src: Images.logo },
    { id: 2, name: "Artem", src: Images.logo },
    { id: 3, name: "Tanja", src: Images.logo },
    { id: 4, name: "Tetyana", src: Images.logo },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How our you" },
    { id: 3, message: "Ok" },
    { id: 4, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = { id: 5, message: action.newMessage };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(message);
      return stateCopy;
    }

    default:
      return state;
  }
};

export default dialogsReducer;
