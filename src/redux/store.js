import { Images } from "../images";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _callsubscriber() {
        console.log('no subscriber observer');
    },
    _state: {
        profile: {
            posts:
                [
                    { id: 1, message: 'ПРивіт', likeCount: 3 },
                    { id: 2, message: 'Як справи', likeCount: 2 },
                    { id: 3, message: 'Зустрінемося? kjjacjbbadj sdhjh acgkj', likeCount: 3 },
                ],
            newPostText: 'aaa'
        },
        dialogs: {
            dialogs: [
                { id: 1, name: 'Vlad', src: Images.logo },
                { id: 2, name: 'Artem', src: Images.logo },
                { id: 3, name: 'Tanja', src: Images.logo },
                { id: 4, name: 'Tetyana', src: Images.logo },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How our you' },
                { id: 3, message: 'Ok' },
                { id: 4, message: 'Yo' },
            ],
            newMessageText: ''
        },
        navbar: {
            items: [
                { href: '/profile', title: 'Profile', id: 1 },
                { href: '/dialogs', title: 'Message', id: 2 },
                { href: '/news', title: 'News', id: 3 },
                { href: '/music', title: 'Music', id: 4 },
                { href: '/settings', title: 'Settings', id: 5 },
            ],
            friends: [
                { id: 1, name: 'Vlad', sr: Images.logo },
                { id: 2, name: 'Artem', sr: Images.logo },
                { id: 3, name: 'Tanja', sr: Images.logo },
                { id: 4, name: 'Tetyana', sr: Images.logo },

            ]
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callsubscriber(this._state);

    },

}



export default store;
