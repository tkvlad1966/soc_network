import React, { useState, useEffect } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatusIsHouc = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const OnStatusChange = (e) => {
    const { value: status } = e.currentTarget;
    setStatus(status);
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