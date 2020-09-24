import React from "react";
import s from "./ProfileInfo.module.css";
import { Images } from "../../../images";
import ProfileStatusIsHouc from "./ProfileStatus/ProfileStatusIsHouc";

const ProfileInfo = (props) => {
  return (
    <div className={s.ava}>
      <div>
        <div>
          <img
            src={
              props.profile?.photos.large
                ? props.profile.photos.large
                : Images.logo
            }
          />
          {/* <img src="https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/10444652_681678601947741_412219683030089855_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LYgmqh8-_FAAX-II6K7&_nc_ht=scontent.fiev5-1.fna&oh=e9cfa778c27f11be5a1e6c5cd359b344&oe=5F3BDAEF" /> */}
        </div>
        <div>
          <h3>{props.profile?.fullName}</h3>
          <p>{props.profile?.aboutMe}</p>
        </div>
      </div>
      <div>
        <ProfileStatusIsHouc
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
