import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
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
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
  }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);
