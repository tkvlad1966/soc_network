import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let rootReduser = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  app: appReducer,
  auth: authReducer,
  form: formReducer,
});

type RootReduserType = typeof rootReduser
export type AppStateType = ReturnType<RootReduserType>


let store = createStore(rootReduser, applyMiddleware(thunkMiddleware));
// console.log('store', store.getState());
// @ts-ignore
window.store = store;

export default store;
