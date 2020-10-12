import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Images } from "../../images";
import { Redirect } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt="emblema"
        src="https://t3.ftcdn.net/jpg/02/94/32/50/240_F_294325088_MEVHPiZe4mqXL2lBYiIWu5698mdYfv5s.jpg"
      />
      <div className={s.login_block}>
        {props.isAuth ? (
          <div>
            <img
              alt="ava"
              src={props.photos != null ? props.photos : Images.logo}
            />
            <span>
              {props.login} -<button onClick={props.logout}>Logout</button>{" "}
            </span>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>Login</NavLink>
            <Redirect to={"/"} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
