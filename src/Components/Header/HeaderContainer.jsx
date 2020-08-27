import React from 'react';
import Header from './Header';
import { API } from '../common/api';
import { connect } from 'react-redux';
import { setAuthUserData, setUserPhotos } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    API.getAuthorization().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, login, email);
        API.getUserProfile(id).then((data) => {
          this.props.setUserPhotos(data.photos.small);
        });
      }
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
    // userId: state.auth.userId,
    photos: state.auth.photos,
  };
};
export default connect(mapStateToProps, {
  setAuthUserData,
  setUserPhotos,
})(HeaderContainer);
