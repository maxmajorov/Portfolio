import React from "react";
import classes from "./ProjectItem.module.scss";

type WorkItemProps = {
  image: { backgroundImage: string };
  title: string;
  description: string;
  link: string;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <li className={classes.projectItem}>
      <div className={classes.projectItem__image} style={image} />
      <div className={classes.projectItem__info}>
        <h3 className={classes.title}>{title}</h3>
        <span className={classes.description}>{description}</span>
      </div>
      <a href={link} className={classes.projectItem__viewBtn} target="blanc">
        Show more
      </a>
    </li>
  );
};
