import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    addNewMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

const DialogsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispathToProps),
)(Dialogs);

export default DialogsContainer;
