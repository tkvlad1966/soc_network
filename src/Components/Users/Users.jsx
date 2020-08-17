import React from 'react';
import s from './Users.module.css';
import { withRouter } from 'react-router-dom';
import { Images } from '../../images';
import * as axios from 'axios';

const UserFooter = (props) => {
  const { u } = props;
  return (
    <div className={s.userDate}>
      <div>{u.name}</div>
      <div className={s.userDateRight}>{'u.location.country'}</div>
      <div>{u.status}</div>
      <div className={s.userDateRight}>{'u.location.city'}</div>
    </div>
  );
};

const UserView = (props) => {
  const { u } = props;
  return (
    <div className={s.users}>
      <div className={s.userFollowed}>
        <div>
          <img src={u.photos.small != null ? u.photos.small : Images.logo} />
        </div>
        <div>
          {u.followed ? (
            <button
              onClick={() => {
                props.unfollow(u.id);
              }}>
              UnFollow{' '}
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(u.id);
              }}>
              Follow{' '}
            </button>
          )}
        </div>
      </div>
      <UserFooter u={u} />
    </div>
  );
};

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>GetUsers</button>
      {props.users.map((u) => (
        <UserView
          u={u}
          key={u.id}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default withRouter(Users);
