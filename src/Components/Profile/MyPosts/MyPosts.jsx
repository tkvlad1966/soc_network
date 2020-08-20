import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostAdd from './PostAdd/PostAdd';

const MyPosts = (props) => {
  const posts = props.posts;
  let postsElements = posts.map((p) => <Post post={p} key={p.id} />);
  return (
    <div className={s.myPost}>
      <h4>My posts</h4>
      <div>
        <PostAdd
          newPostText={props.newPostText}
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost}
        />
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
