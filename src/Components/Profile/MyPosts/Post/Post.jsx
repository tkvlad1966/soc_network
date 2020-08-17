import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  const {
    post: { likeCount, message },
  } = props;
  return (
    <div className={s.item}>
      <div className={s.leftContainer}>
        <img src="https://avatarko.ru/img/kartinka/18/muzhchina_spinoj_shapka_17674.jpg" />
        {message}
      </div>
      <div className="like">
        <span>Like: </span>
        <span>_{likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
