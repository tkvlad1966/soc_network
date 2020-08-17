import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <div className={s.zastava}>
        <img src="https://cdn.pixabay.com/photo/2017/01/30/16/11/sunset-2021266__480.jpg" />
      </div>
      <div className={s.ava}>
        <ProfileInfo />
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
