import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getIsAuth, getLogin, getPhotos } from '../../redux/auth-selector';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
    login: getLogin(state),
    photos: getPhotos(state),
  };
};
export default connect(mapStateToProps, { logout })(HeaderContainer);
