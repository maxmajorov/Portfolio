import React from "react";
import classes from "./AboutMySelf.module.css";
import avatar from "../../assets/img/avatar.jpg";

export const AboutMySelf: React.FC = () => {
  return (
    <div className={classes.aboutmyself__container}>
      <div className={classes.intoduce}>
        <span>Hi There</span>
        <h1>I am Max Predko</h1>
        <p>A React Front-End Developer</p>
      </div>
      <div className={classes.photo}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
