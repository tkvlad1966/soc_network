import React, { Component } from "react";
import "./App.css";
import Music from "./Components/Music/Music";
import { withRouter, Route } from "react-router-dom";
import News from "./Components/News/News";
import Setting from "./Components/Setting/Setting";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Spinner from "./Components/common/spinner";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Spinner />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Route render={() => <NavBarContainer />} />
        <div className="app-wrapper-content">
          <Route path="/login" render={() => <Login />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/users" render={() => <UsersContainer pageTitle={'Сторінка користувачів'}/>} />
          <Route path="/settings" component={Setting} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
