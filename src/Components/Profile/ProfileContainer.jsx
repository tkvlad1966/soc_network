import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../common/api';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { toogleIsFetching } from '../../redux/app-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.toogleIsFetching(true);
    getUserProfile(userId).then((response) => {
      this.props.toogleIsFetching(false);
      this.props.setUserProfile(response.data);
    });
  }
  render() {
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
});

export default connect(mapStateToProps, { setUserProfile, toogleIsFetching })(
  withRouter(ProfileContainer),
);
