import React from 'react';
import s from './PostAdd.module.css';

const PostAdd = (props) => {
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.textarea}>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <div className={s.button}>
        <button onClick={onAddPost}>Add post</button>
      </div>
    </div>
  );
};

export default PostAdd;
