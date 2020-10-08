import { Images } from "../images";

type ItemType = {
  href: string;
  title: string;
  id: number;
};

type FriendType = {
  id: number;
  name: string;
  sr: any;
};

let initialState = {
  items: [
    { href: "/profile", title: "Profile", id: 1 },
    { href: "/dialogs", title: "Message", id: 2 },
    { href: "/news", title: "News", id: 3 },
    { href: "/music", title: "Music", id: 4 },
    { href: "/users", title: "Users", id: 5 },
    { href: "/settings", title: "Settings", id: 6 },
  ] as Array<ItemType>,
  friends: [
    { id: 1, name: "Vlad", sr: Images.logo },
    { id: 2, name: "Artem", sr: Images.logo },
    { id: 3, name: "Tanja", sr: Images.logo },
    { id: 4, name: "Tetyana", sr: Images.logo },
  ] as Array<FriendType>,
};

type InitialStateType = typeof initialState;

const navbarReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default navbarReducer;
