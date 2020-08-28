import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuthMe) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Profile {...this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
  isFetching: state.app.isFetching,
  isAuthMe: state.app.isAuth,
});

export default connect(mapStateToProps, {
  getUserProfile: getUserProfileThunkCreator,
})(withRouter(ProfileContainer));
