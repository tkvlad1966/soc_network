import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

let mapStateToProps = (state) => {
  return {
    items: state.navbar.items,
    friends: state.navbar.friends,
  };
};

let mapToDispatch = (dispatch) => {
  return {};
};

const NavBarContainer = connect(mapStateToProps, mapToDispatch)(NavBar);

export default NavBarContainer;
