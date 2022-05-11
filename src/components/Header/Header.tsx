import React from "react";
import classes from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={classes.header__container}>
      <img src="img/logo.svg" alt="My CV" className={classes.logo} />
      <nav className={classes.header__navigation}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>Main</li>
          <li className={classes.navigation__item}>Skills</li>
          <li className={classes.navigation__item}>Projects</li>
          <li className={classes.navigation__item}>News</li>
        </ul>
      </nav>
    </div>
  );
};
