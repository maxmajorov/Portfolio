import React from "react";
import classes from "./WorksList.module.css";
import { v1 } from "uuid";
import { WorkItem } from "../WorkItem/WorkItem";

export const WorksList: React.FC = () => {
  type worksStateType = {
    id: string;
    title: string;
    description: string;
    logo: string;
  };
  const worksState: Array<worksStateType> = [
    {
      id: v1(),
      title: "Social Network",
      description: "Stack: React, TS, Redux, React-Redux, Material UI, axios",
      logo: "network",
    },
    {
      id: v1(),
      title: "ToDo List",
      description: "Stack: React, TS, Redux, React-Redux, Material UI, axios",
      logo: "todo",
    },
    {
      id: v1(),
      title: "Counter",
      description: "Stack: React, TS, Redux, React-Redux, Virtual Router Dom",
      logo: "ts",
    },
  ];

  return (
    <section className={classes.worksBlock}>
      <h2 className={classes.title}>My Works</h2>
      <ul className={classes.works__list}>
        {worksState.map((work) => (
          <WorkItem
            key={work.id}
            logo={work.logo}
            title={work.title}
            description={work.description}
          />
        ))}
      </ul>
    </section>
  );
};
