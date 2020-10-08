import React from "react";
import s from "./UsersC.module.css";
import { withRouter, NavLink } from "react-router-dom";
import { Images } from "../../images";
import Paginator from "../common/paginator/paginator";

const Users = React.memo((props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div className={s.users} key={user.id}>
            <div className={s.userFollowed}>
              <div>
                <NavLink to={"/profile/" + user.id}>
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
                    disabled={props.folloWingInProgress.some(
                      (f) => f === user.id
                    )}
                    onClick={() => {
                      props.onClickUnFollow(user.id);
                    }}
                  >
                    UnFollow{" "}
                  </button>
                ) : (
                  <button
                    disabled={props.folloWingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.onClickFollow(user.id);
                    }}
                  >
                    Follow{" "}
                  </button>
                )}
              </div>
            </div>
            <div className={s.userDate}>
              <div>{user.name}</div>
              <div className={s.userDateRight}>{user.id}</div>
              <div>{user.status}</div>
              <div className={s.userDateRight}>{"u.location.city"}</div>
            </div>
          </div>
        );
      })}

      <Paginator
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalCountUsers={props.totalCountUsers}
        sizePage={props.sizePage}
      />
    </div>
  );
});

export default withRouter(Users);
