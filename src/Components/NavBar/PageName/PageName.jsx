import React from 'react';
import s from './NavBar.module.css';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const items = [
  { href: '/profile', title: 'Profile', id: '1' },
  { href: '/dialogs', title: 'Message', id: '2' },
  { href: '/news', title: 'News', id: '3' },
  { href: '/music', title: 'Music', id: '4' },
  { href: '/settings', title: 'Settings', id: '5' },
];
const NavBar = (props) => {
  const {
    location: { pathname },
  } = props;
  return (
    <nav className={s.nav}>
      <ul>
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li className={isActive ? s.active : s.item} key={item.id}>
              <NavLink to={item.href}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
