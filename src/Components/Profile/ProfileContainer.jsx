import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
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
  }
  render() {
    return (
      <div>
        <Profile {...this.props.profile} />
      </div>
    );
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profile,
  isFetching: state.app.isFetching,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);

// connect(mapStateToProps, {
//   getUserProfile: getUserProfileThunkCreator,
// })(withRouter(AuthRedirectComponent));
