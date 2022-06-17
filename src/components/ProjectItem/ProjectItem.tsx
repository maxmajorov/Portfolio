import React from "react";
import classes from "./ProjectItem.module.scss";

type WorkItemProps = {
  image: { backgroundImage: string };
  title: string;
  description: string;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <li className={classes.projectItem}>
      <div className={classes.projectItem__image} style={image} />
      <div className={classes.projectItem__info}>
        <h3 className={classes.title}>{title}</h3>
        <span className={classes.description}>{description}</span>
      </div>
      <a href="#xxx" className={classes.projectItem__viewBtn}>
        Show more
      </a>
    </li>
  );
};
