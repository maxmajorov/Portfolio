import React from "react";
import classes from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer__container}>
      <div className={classes.container}>
        <div className={classes.siteMenu}>
          <div className={classes.inner}>
            <div className={classes.logo}>
              <a href="#contact" className={classes.logoStyle}>
                MAX<span style={{ color: "#ff0066" }}>I</span>M
              </a>
            </div>
            <div className={classes.navigation}>
              <div className={classes.header__navigation}>
                <ul className={classes.navigation__list}>
                  <li className={classes.socialList__item}>
                    <a href="#home">LinkedIn</a>
                  </li>

                  <li className={classes.socialList__item}>
                    <a href="#skills">GitHub</a>
                  </li>

                  <li className={classes.socialList__item}>
                    <a href="#projects">Facebook</a>
                  </li>

                  <li className={classes.socialList__item}>
                    <a href="#contact">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__copyright}>
        <small>&copy; 2022 maxpredko. &nbsp;All rights reserved.</small>
      </div>
    </footer>
  );
};
