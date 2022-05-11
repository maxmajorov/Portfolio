import React from "react";
import classes from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer__container}>
      <h2 className={classes.title}>Maxim Predko</h2>
      <nav className={classes.footer__navigation}>
        <ul className={classes.footer__socialList}>
          <li className={classes.socialList__item}>LinkedIn</li>
          <li className={classes.socialList__item}>GitHub</li>
          <li className={classes.socialList__item}>Facebook</li>
          <li className={classes.socialList__item}>Twitter</li>
        </ul>
      </nav>
      <small className={classes.footer__copyright}>
        &copy; 2022 maxpredko, &nbsp;All rights reserved.
      </small>
    </footer>
  );
};
