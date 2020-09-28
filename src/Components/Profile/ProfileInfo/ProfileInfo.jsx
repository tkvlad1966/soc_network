import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import { Images } from "../../../images";
import ProfileStatusIsHouc from "./ProfileStatus/ProfileStatusIsHouc";
import Spinner from "../../common/spinner";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const {
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
  } = props;

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Spinner />;
  }

  const onLoadPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData);
    // setEditMode(false);
  };

  return (
    <div>
      <div className={s.ava}>
        <img
          src={profile.photos.large ? profile.photos.large : Images.logo}
          alt="avatar"
        />
        {isOwner && <input type={"file"} onChange={onLoadPhoto} />}
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <div>
        <ProfileStatusIsHouc
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>
        <b>Full name:</b>
        {profile?.fullName}
      </div>
      <div>
        <b>Looking for a job:</b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills:</b>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            contactTitle={key}
            contactValue={profile.contacts[key]}
            key={key}
          />
        ))}
      </div>
      <div>
        <b>About Me:</b>
        {profile.aboutMe}
      </div>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
