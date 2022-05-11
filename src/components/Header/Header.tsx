import React from "react";
import classes from "./Header.module.css";
// import classesContainer from "../../assets/css/Container.module.css";

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.header__navigation}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a href="">Main</a>
          </li>

          <li className={classes.navigation__item}>
            <a href="">Skills</a>
          </li>

          <li className={classes.navigation__item}>
            <a href="">Projects</a>
          </li>

          <li className={classes.navigation__item}>
            <a href="">News</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
