import React from "react";
import classes from "./SkillsItem.module.css";

type SkillsItemProps = {
  logo: string;
  title: string;
  description: string;
};

export const SkillsItem: React.FC<SkillsItemProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <li className={classes.skill__item}>
      <img className={classes.logo} src={logo} alt="skill-item-logo" />
      <h3 className={classes.skill__title}>{title}</h3>
      <span className={classes.skill__description}>{description}</span>
    </li>
  );
};
