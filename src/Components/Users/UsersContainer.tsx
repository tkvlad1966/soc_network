import React from "react";
import { connect } from "react-redux";
import Users from "./UsersC";
import {
  setCurrentPage,
  getUsersThunkCreator,
  onClickUnFollowThunkCreator,
  onClickFollowThunkCreator,
} from "../../redux/users-reducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { UserType } from "../../type";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType  = { 
  currentPage: number
  totalCountUsers: number
  sizePage: number
  users: Array<UserType>
  folloWingInProgress: Array<number>
}

type MapDispatchToPropsType  = {
  getUsers: (pageNumber: number, sizePage: number) => void
  setCurrentPage: (pageNumber: number) => void
  onClickUnFollow: (userID: number) => void
  onClickFollow: (userID: number) => void
}

type OwnPropseType = {
  pageTitle: string
}

type PropsType  = MapStateToPropsType & MapDispatchToPropsType & OwnPropseType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {currentPage, sizePage} = this.props
    this.props.getUsers(currentPage, sizePage);
  }

  onPageChange = (pageNumber: number) => {
    const { sizePage} = this.props
    this.props.getUsers(pageNumber, sizePage);
    this.props.setCurrentPage(pageNumber);
  };

  render() {

    return <>
    <h2>{this.props.pageTitle}</h2>
        <Users
          totalCountUsers={this.props.totalCountUsers}
          currentPage={this.props.currentPage}
          users={this.props.users}
          sizePage={this.props.sizePage}
          folloWingInProgress={this.props.folloWingInProgress}
          onPageChange={this.onPageChange}
          onClickFollow={this.props.onClickFollow}
          onClickUnFollow={this.props.onClickUnFollow}
        />
    </>
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    sizePage: state.usersPage.sizePage,
    folloWingInProgress: state.app.folloWingInProgress,
  };
};

export default compose(
  withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropseType, AppStateType>(mapStateToProps, {
    setCurrentPage,
    getUsers: getUsersThunkCreator,
    onClickUnFollow: onClickUnFollowThunkCreator,
    onClickFollow: onClickFollowThunkCreator,
  })
)(UsersContainer);

