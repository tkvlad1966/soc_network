import React from 'react';
import s from './NewMessages.module.css';
import { Field, reduxForm } from 'redux-form';

const NewMessage = (props) => {
  let addNewMessage = (value) => {
    props.addNewMessage(value.newMessage);
  };

  return (
    <div>
      <NewMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newMessage"
          placeholder="enter your message"
          component="textarea"
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const NewMessageFormRedux = reduxForm({ form: 'newMessageForm' })(
  NewMessageForm,
);
export default NewMessage;
