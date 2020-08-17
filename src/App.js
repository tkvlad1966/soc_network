import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';
import Setting from './Components/Setting/Setting';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {

  return (
    < BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Route render={() => <NavBarContainer />} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />}
          />
          <Route path='/profile'
            render={() => <Profile />}
          />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/settings' component={Setting} />
        </div>
      </div>
    </BrowserRouter >

  );
}

export default App;
