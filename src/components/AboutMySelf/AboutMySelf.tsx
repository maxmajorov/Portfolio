import React from "react";
import classes from "./AboutMySelf.module.scss";
import avatar from "../../assets/img/avatar.jpg";

export const AboutMySelf: React.FC = () => {
  return (
    <section id="home" className={classes.mainBlock}>
      <div className={classes.overlay}>
        <div className={classes.container}>
          <div className={classes.introduce}>
            <h4 className={classes.greeting}>Hi There</h4>
            <h1 className={classes.name}>I'm Maxim Predko</h1>
            <h4 className={classes.specialization}>
              A React Front-End Developer
            </h4>
            <a href="#contact" className={classes.btn}>
              Contact me
            </a>
          </div>
          <div className={classes.avatar}>
            <div className={classes.frame}></div>
            <div className={classes.photo}>
              <img
                src={avatar}
                alt="avatar"
                // style={{ borderRadius: "50%", transform: "translateY(3px)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
