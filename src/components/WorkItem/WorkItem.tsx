import React from "react";
import classes from "./WorkItem.module.css";

type WorkItemProps = {
  logo: string;
  title: string;
  description: string;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <li className={classes.work__item}>
      <img className={classes.logo} src={logo} alt="work-item-logo" />
      <h3 className={classes.work__title}>{title}</h3>
      <span className={classes.work__description}>{description}</span>
    </li>
  );
};
