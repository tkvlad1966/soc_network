import React from 'react';
import s from './UsersC.module.css';
import { withRouter } from 'react-router-dom';
import { Images } from '../../images';

// class Users extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`,
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalCountUsers(response.data.totalCount);
//       });
//   }

//   onPageChange(pageNumber) {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`,
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   }

//   render() {
//     let countPage = Math.ceil(this.props.totalCountUsers / this.props.sizePage);
//     let pages = [];
//     for (
//       let i = this.props.currentPage - 5;
//       i <= this.props.currentPage + 5;
//       i++
//     ) {
//       if (i > 0) {
//         pages.push(i);
//       }
//     }
const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div className={s.users} key={user.id}>
            <div className={s.userFollowed}>
              <div>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : Images.logo
                  }
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}>
                    UnFollow{' '}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
