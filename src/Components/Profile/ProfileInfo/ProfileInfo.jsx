import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.ava}>
      <div>
        <img src="https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/10444652_681678601947741_412219683030089855_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LYgmqh8-_FAAX-II6K7&_nc_ht=scontent.fiev5-1.fna&oh=e9cfa778c27f11be5a1e6c5cd359b344&oe=5F3BDAEF" />
      </div>
      <div>
        <h3>Vlad T.</h3>
        <p>Date of birth: 18.08.1966</p>
        <p>City: Kremenets</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
