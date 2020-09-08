import React from 'react';
import { connect } from 'react-redux';
import Users from './UsersC';
import {
  setCurrentPage,
  setTotalCountUsers,
  getUsersThunkCreator,
  onClickUnFollowThunkCreator,
  onClickFollowThunkCreator,
} from '../../redux/users-reducer';

import { API } from '../common/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.sizePage);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.sizePage);
    this.props.setCurrentPage(pageNumber);
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
          onClickFollow={this.props.onClickFollow}
          onClickUnFollow={this.props.onClickUnFollow}
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

const UsersContainer = compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPage,
    setTotalCountUsers,
    getUsers: getUsersThunkCreator,
    onClickUnFollow: onClickUnFollowThunkCreator,
    onClickFollow: onClickFollowThunkCreator,
  }),
)(UsersAPIContainer);

export default UsersContainer;
