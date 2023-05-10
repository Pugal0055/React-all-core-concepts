import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { authAction } from "../../store/authOwnThunk";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthentication);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
