import React from 'react';
import s from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {
  const messages = props.messages;
  return (
    <div className={s.messages}>
      {messages.map((item) => {
        return (
          <div className={s.message} key={item.id}>
            {item.message}
          </div>
        );
      })}
      <NewMessage addNewMessage={props.addNewMessage} />
    </div>
  );
};

export default Messages;
