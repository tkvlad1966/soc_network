import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://t3.ftcdn.net/jpg/02/94/32/50/240_F_294325088_MEVHPiZe4mqXL2lBYiIWu5698mdYfv5s.jpg" />
      <div className={s.login_block}>Login</div>
    </header>
  );
};

export default Header;
