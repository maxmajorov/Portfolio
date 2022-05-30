import React from "react";
import classes from "./Header.module.css";
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
            <div className={classes.navigation}>
              <nav className={classes.header__navigation}>
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
      </div>
    </header>
  );
};
