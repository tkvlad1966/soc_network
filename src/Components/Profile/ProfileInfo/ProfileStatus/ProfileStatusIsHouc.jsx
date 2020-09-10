import React, { useState } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatusIsHouc = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  // useState = {
  //   editMode: false,
  //   status: props.status,
  // };

  const OnStatusChange = (e) => {
    const { value: status } = e.currentTarget;
    setStatus(status);
  };

  const componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== props.status) {
      setStatus(props.status);
    }
  };

  const ActiveEditMode = () => {
    setEditMode(true);
  };
  const deActiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  return (
    <div>
      {!editMode && (
        <span onDoubleClick={ActiveEditMode}>{props.status || '_ _ _ _'}</span>
      )}
      <div />

      {editMode && (
        <div>
          <input
            onChange={OnStatusChange}
            autoFocus={true}
            onBlur={deActiveEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
// }

export default ProfileStatusIsHouc;
