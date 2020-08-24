import React from 'react';
import s from './UsersC.module.css';
import { withRouter, NavLink } from 'react-router-dom';
import { Images } from '../../images';
import { postFollow, delFollow } from '../common/api';

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div className={s.users} key={user.id}>
            <div className={s.userFollowed}>
              <div>
                <NavLink to={'/profile/' + user.id}>
                  <img
                    src={
                      user.photos.small != null
                        ? user.photos.small
                        : Images.logo
                    }
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      delFollow(user.id).then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });
                    }}>
                    UnFollow{' '}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      postFollow(user.id).then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
                    }}>
                    Follow{' '}
                  </button>
                )}
              </div>
            </div>
            <div className={s.userDate}>
              <div>{user.name}</div>
              <div className={s.userDateRight}>{user.id}</div>
              <div>{user.status}</div>
              <div className={s.userDateRight}>{'u.location.city'}</div>
            </div>
          </div>
        );
      })}
      <div>
        {props.pages.map((num) => (
          <span
            className={num === props.currentPage ? s.selected : s.unselected}
            onClick={() => {
              props.onPageChange(num);
            }}
            key={num}>
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};
// }

export default withRouter(Users);
