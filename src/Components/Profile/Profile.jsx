import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  if (!props.isAuthMe) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div className={s.zastava}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/01/30/16/11/sunset-2021266__480.jpg" />
        </div>
      </div>
      <div className={s.ava}>
        <ProfileInfo profile={props.profile.profile} />
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
