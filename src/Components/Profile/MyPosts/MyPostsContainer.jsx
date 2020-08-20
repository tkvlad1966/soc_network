import React from 'react';
import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    posts: state.profile.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text));
    },
    addPost: () => {
      dispatch(addPost());
      dispatch(updateNewPostText(''));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
