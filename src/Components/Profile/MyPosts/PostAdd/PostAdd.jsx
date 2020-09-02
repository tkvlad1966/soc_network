import React from 'react';
import s from './PostAdd.module.css';
import { Field, reduxForm } from 'redux-form';

const PostAdd = (props) => {
  const onSubmit = (formData) => {
    props.addPost(formData.textarea);
  };

  return <PostAddReduxForm onSubmit={onSubmit} />;
};

const PostAddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea}>
        <Field name="textarea" component="textarea" />
      </div>
      <div className={s.button}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostAddReduxForm = reduxForm({ form: 'post' })(PostAddForm);

export default PostAdd;
