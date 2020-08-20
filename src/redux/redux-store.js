import { createStore, combineReducers } from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    app: appReducer,
    auth: authReducer
})

let store = createStore(reducers);
window.store = store;

export default store;