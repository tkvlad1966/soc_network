import React from 'react';
import s from './DialogsItem.module.css';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  const pathname = props.pathname;
  return (
    <div className={s.dialogsItems}>
      {props.dialogs.map((item) => {
        const pathnameItem =
          pathname.slice(-7, -1) === 'dialog'
            ? pathname + '/' + item.id
            : pathname.slice(0, -2) + '/' + item.id;
        return (
          <div className={s.dialog} key={item.id}>
            <img src={item.src} />
            <NavLink to={pathnameItem} activeClassName={s.activeLink}>
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default DialogsItem;
