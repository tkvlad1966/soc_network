import { Images } from "../images";

const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType = {
  id: null | Number;
  name: string | null;
  src: any;
};

type MessageType = {
  id: null | Number;
  message?: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Vlad", src: Images.logo },
    { id: 2, name: "Artem", src: Images.logo },
    { id: 3, name: "Tanja", src: Images.logo },
    { id: 4, name: "Tetyana", src: Images.logo },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How our you" },
    { id: 3, message: "Ok" },
    { id: 4, message: "Yo" },
  ] as Array<MessageType>,
};

export type initialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): initialStateType => {
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

type AddMessageActionCreatorActionType = {
  type: typeof ADD_MESSAGE;
  newMessage: string;
};

export const addMessageActionCreator = (
  newMessage: string
): AddMessageActionCreatorActionType => ({
  type: ADD_MESSAGE,
  newMessage,
});

export default dialogsReducer;
