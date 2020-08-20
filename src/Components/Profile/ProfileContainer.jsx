import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../common/api';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { toogleIsFetching } from '../../redux/app-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    getUserProfile().then((response) => {
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
  ProfileContainer,
);
