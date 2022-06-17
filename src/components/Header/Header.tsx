import React from "react";
import { Menu } from "../../common/components/Menu/Menu";
import classes from "./Header.module.scss";
// import classesContainer from "../../assets/css/Container.module.css";

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.siteMenu}>
          <div className={classes.inner}>
            <div className={classes.logo}>
              <a href="#contact" className={classes.logoStyle}>
                MAX<span style={{ color: "#ff0066" }}>I</span>M
              </a>
            </div>
            <Menu />

            <nav className={classes.navigation}>
              <ul className={classes.navigation__list}>
                <li className={classes.navigation__item}>
                  <a href="#home">Home</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#skills">Skills</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#projects">Projects</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
