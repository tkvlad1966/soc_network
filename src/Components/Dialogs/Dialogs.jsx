import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import { withRouter } from 'react-router-dom';
import store from '../../redux/store';

const Dialogs = (props) => {
  const {
    location: { pathname },
  } = props;
  const dialogs = props.dialogs;

  return (
    <div className={s.dialogs}>
      <DialogsItem pathname={pathname} dialogs={dialogs} />
      <Messages
        newMessageText={props.newMessageText}
        messages={props.messages}
        addNewMessage={props.addNewMessage}
        onChangeMessage={props.onChangeMessage}
      />
    </div>
  );
};

export default withRouter(Dialogs);
