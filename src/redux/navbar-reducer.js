import { Images } from "../images";

let initialState = {
    items: [
        { href: '/profile', title: 'Profile', id: 1 },
        { href: '/dialogs', title: 'Message', id: 2 },
        { href: '/news', title: 'News', id: 3 },
        { href: '/music', title: 'Music', id: 4 },
        { href: '/users', title: 'Users', id: 5 },
        { href: '/settings', title: 'Settings', id: 6 },
    ],
    friends: [
        { id: 1, name: 'Vlad', sr: Images.logo },
        { id: 2, name: 'Artem', sr: Images.logo },
        { id: 3, name: 'Tanja', sr: Images.logo },
        { id: 4, name: 'Tetyana', sr: Images.logo },

    ]
};

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;