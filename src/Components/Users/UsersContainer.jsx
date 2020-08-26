import React from 'react';
import { connect } from 'react-redux';
import Users from './UsersC';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCountUsers,
} from '../../redux/users-reducer';
import { getUsers, postFollow, delFollow } from '../common/api';
import { Images } from '../../images';
import {
  toogleIsFetching,
  toogleFollowingProgress,
  toogleUnFollowingProgress,
} from '../../redux/app-reducer';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    getUsers({ page: this.props.currentPage, count: this.props.sizePage }).then(
      (data) => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCountUsers(data.totalCount);
      },
    );
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);

    getUsers({ page: pageNumber, count: this.props.sizePage }).then((data) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  onClickFollow = async (userId) => {
    const { toogleFollowingProgress, toogleUnFollowingProgress } = this.props;
    toogleFollowingProgress(userId);
    try {
      const response = await postFollow(userId);
      if (response.data.resultCode === 0) {
        this.props.follow(userId);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      toogleUnFollowingProgress(userId);
    }
  };

  onClickOnUnFollow = (userId) => {
    const { toogleFollowingProgress, toogleUnFollowingProgress } = this.props;

    toogleFollowingProgress(userId);
    delFollow(userId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.unfollow(userId);
        }
      })
      .catch((error) => {
        console.log('unfollow error', error);
      })
      .finally(() => {
        toogleUnFollowingProgress(userId);
      });
  };

  render() {
    const { isFetching } = this.props;
    let countPage = Math.ceil(this.props.totalCountUsers / this.props.sizePage);
    let pages = [];
    for (
      let i = this.props.currentPage - 5;
      i <= this.props.currentPage + 5 && i <= countPage;
      i++
    ) {
      if (i > 0) {
        pages.push(i);
      }
    }

    return (
      <div>
        <Users
          pages={pages}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          sizePage={this.props.sizePage}
          folloWingInProgress={this.props.folloWingInProgress}
          // unfollow={this.props.unfollow}
          // follow={this.props.follow}
          onClickFollow={this.onClickFollow}
          onClickOnUnFollow={this.onClickOnUnFollow}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    sizePage: state.usersPage.sizePage,
    isFetching: state.app.isFetching,
    folloWingInProgress: state.app.folloWingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCountUsers,
  toogleIsFetching,
  toogleFollowingProgress,
  toogleUnFollowingProgress,
})(UsersAPIContainer);

export default UsersContainer;
