import React from 'react';
import s from './NewMessages.module.css';

const NewMessage = (props) => {
  let addNewMessage = () => {
    props.addNewMessage();
  };

  let onChangeMessage = (event) => {
    let text = event.target.value;
    props.onChangeMessage(text);
  };
  return (
    <div>
      <div>
        <textarea
          onChange={onChangeMessage}
          placeholder="enter your message"
          value={props.newMessageText}
        />
      </div>
      <div>
        <button onClick={addNewMessage}>Send message</button>
      </div>
    </div>
  );
};

export default NewMessage;
