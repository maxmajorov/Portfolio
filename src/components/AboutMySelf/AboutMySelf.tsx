import React from "react";
import classes from "./AboutMySelf.module.css";
import classesContainer from "../../assets/css/Container.module.css";
import avatar from "../../assets/img/avatar.jpg";

export const AboutMySelf: React.FC = () => {
  return (
    <section className={classes.mainBlock}>
      <div className={classes.container}>
        <div className={classes.intoduce}>
          <span>Hi There</span>
          <h1>I am Max Predko</h1>
          <p>A React Front-End Developer</p>
        </div>
        <div className={classes.photo}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};
