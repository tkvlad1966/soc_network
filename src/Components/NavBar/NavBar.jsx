import React, { useState } from 'react';
import s from './NavBar.module.css';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Images } from '../../images';
import Friends from './Friends/Friends';

const NavBar = (props) => {
  const {
    location: { pathname },
  } = props;
  const items = props.items;
  const friends = props.friends;
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
      <div>
        <h3>Friends</h3>
        <Friends friends={friends} />
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
