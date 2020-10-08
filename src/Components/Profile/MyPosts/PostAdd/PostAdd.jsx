import React from "react";
import s from "./PostAdd.module.css";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLength } from "../../../../utils/validator";
import { Textarea } from "../../../common/FormsControls";

const maxLength40 = maxLength(40);

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
        <Field
          name="textarea"
          component={Textarea}
          validate={[requiredField, maxLength40]}
        />
      </div>
      <div className={s.button}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostAddReduxForm = reduxForm({ form: "post" })(PostAddForm);

export default PostAdd;
