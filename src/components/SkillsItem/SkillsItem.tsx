import React from "react";
import classes from "./SkillsItem.module.scss";

type SkillsItemProps = {
  logo: string;
  title: string;
  persent: number;
};

export const SkillsItem: React.FC<SkillsItemProps> = ({
  logo,
  title,
  persent,
}) => {
  return (
    <li className={classes.skillItem}>
      <h3 className={classes.skillItem__title}>{title}</h3>
      <div className={classes.skillItem__meter}>
        <span style={{ width: `${persent}%` }}></span>
        <div className={classes.persent}>{persent}%</div>
      </div>
    </li>
  );
};
