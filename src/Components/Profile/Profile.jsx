import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <div className={s.zastava}>
        <div>
          <img
            alt="zastavka"
            src="https://cdn.pixabay.com/photo/2017/01/30/16/11/sunset-2021266__480.jpg"
          />
        </div>
      </div>
      <div className={s.ava}>
        <ProfileInfo
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          saveProfile={props.saveProfile}
        />
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
