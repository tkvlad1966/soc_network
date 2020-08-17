import React from 'react';
import s from './Friends.module.css';
import { Images } from '../../../images';

const Friends = (props) => {
  const { friends } = props;
  return (
    <div className={s.friends}>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <img src={friend.sr} />
            {friend.name}
          </div>
        );
      })}
    </div>
  );
};
{
  /* // <li className={isActive ? s.active : s.item} key={item.id}>
        //   <NavLink to={item.href}>{item.title}</NavLink>
        // </li> */
}

export default Friends;
