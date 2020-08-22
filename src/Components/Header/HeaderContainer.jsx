import React from 'react';
import Header from './Header';
import { getAuthorization, getUserProfile } from '../common/api';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { setUserProfile } from '../../redux/profile-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuthorization().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
    let userId = this.props.userId;
    getUserProfile(userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    profile: state.profile.profile,
  };
};
export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(
  HeaderContainer,
);
