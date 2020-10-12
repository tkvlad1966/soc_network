import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
} from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userIdAuth;
    }
    if (userId) {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  }
  render() {
    return (
      <div>
        <Profile
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
          isOwner={!this.props.match.params.userId}
          {...this.props.profile}
          {...this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
  isFetching: state.app.isFetching,
  status: state.profile.status,
  userIdAuth: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveProfile: saveProfileThunkCreator,
  }),
  withRouter
  // withAuthRedirect,
)(ProfileContainer);
