import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Spinner from './Components/common/spinner'

// let rerenderEntireTree = (state) => {
ReactDOM.render(
    <Provider store={store}>
        <Spinner />
        <App />
    </Provider>,
    document.getElementById('root')
);
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
