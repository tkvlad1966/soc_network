import React from 'react';
import s from './NewMessages.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls';
import { maxLength, requiredField } from '../../../../utils/validator';

const maxLength20 = maxLength(20);

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
          component={Textarea}
          validate={[requiredField, maxLength20]}
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
