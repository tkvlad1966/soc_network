import React from "react";
import s from "./ProfileInfo.module.css";
import { Images } from "../../../images";
import ProfileStatusIsHouc from "./ProfileStatus/ProfileStatusIsHouc";

const ProfileInfo = (props) => {
  const onLoadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
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
        </div>
        <div>
          <h3>{props.profile?.fullName}</h3>
          <p>{props.profile?.aboutMe}</p>
        </div>
        {props.isOwner && <input type={"file"} onChange={onLoadPhoto} />}
      </div>
      <div>
        <ProfileStatusIsHouc
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
