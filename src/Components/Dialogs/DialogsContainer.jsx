import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText,
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator());
      dispatch(updateNewMessageTextActionCreator(''));
    },
    onChangeMessage: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = withAuthRedirect(
  connect(mapStateToProps, mapDispathToProps)(Dialogs),
);

export default DialogsContainer;
