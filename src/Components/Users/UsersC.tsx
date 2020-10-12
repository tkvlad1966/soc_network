import React, { FC } from "react";
import s from "./UsersC.module.css";
import { withRouter, NavLink, RouteComponentProps } from "react-router-dom";
import { Images } from "../../images";
import Paginator from "../common/paginator/paginator";
import { UserType } from "../../type";

type PropsType = {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  totalCountUsers: number;
  sizePage: number;
  users: Array<UserType>;
  folloWingInProgress: Array<number>;
  onClickUnFollow: (userID: number) => void;
  onClickFollow: (userID: number) => void;
};

// interface Props {      // custom properties passed to component
//   className: string;
// }

const Users: FC<PropsType & RouteComponentProps<{}>> = React.memo((props) => {
  const {
    currentPage,
    onPageChange,
    totalCountUsers,
    sizePage,
    users,
    folloWingInProgress,
    onClickUnFollow,
    onClickFollow,
  } = props;

  return (
    <div>
      {users.map((user) => {
        return (
          <div className={s.users} key={user.id}>
            <div className={s.userFollowed}>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img alt="photka" src={user?.photos?.small! ?? Images.logo} />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.folloWingInProgress.some(
                      (f) => f === user.id
                    )}
                    onClick={() => {
                      onClickUnFollow(user.id!);
                    }}
                  >
                    UnFollow{" "}
                  </button>
                ) : (
                  <button
                    disabled={folloWingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      onClickFollow(user.id!);
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
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalCountUsers={totalCountUsers}
        sizePage={sizePage}
      />
    </div>
  );
});

export default withRouter(Users)  // withRouter має бути
