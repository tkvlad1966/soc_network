import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    app: appReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;