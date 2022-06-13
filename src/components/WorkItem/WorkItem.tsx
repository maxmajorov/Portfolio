import React from "react";
import classes from "./WorkItem.module.css";

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
    <li className={classes.item}>
      <div className={classes.image} style={image} />
      <div className={classes.info}>
        <h3 className={classes.title}>{title}</h3>
        <span className={classes.description}>{description}</span>
      </div>
      <a className={classes.viewBtn}>Show more</a>
    </li>
  );
};
