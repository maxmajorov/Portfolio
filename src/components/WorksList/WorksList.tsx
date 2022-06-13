import React from "react";
import classes from "./WorksList.module.css";
import { v1 } from "uuid";
import { WorkItem } from "../WorkItem/WorkItem";
import { Title } from "../../common/components/Title/Title";
import social from "../../assets/img/social.png";
import todo from "../../assets/img/todo.jpg";

export const WorksList: React.FC = () => {
  type worksStateType = {
    id: string;
    title: string;
    description: string;
    image: { backgroundImage: string };
  };
  const worksState: Array<worksStateType> = [
    {
      id: v1(),
      title: "Social Network",
      description: "Stack: React, TS, Redux, React-Redux, Material UI, axios",
      image: { backgroundImage: `url(${social})` },
    },
    {
      id: v1(),
      title: "ToDo List",
      description: "Stack: React, TS, Redux, React-Redux, Material UI, axios",
      image: { backgroundImage: `url(${todo})` },
    },
    {
      id: v1(),
      title: "Counter",
      description: "Stack: React, TS, Redux, React-Redux, Virtual Router Dom",
      image: { backgroundImage: `url(${social})` },
    },
  ];

  return (
    <section className={classes.worksBlock}>
      <div className={classes.container}>
        <Title title="my projects" />
        <ul className={classes.list}>
          {worksState.map((work) => (
            <WorkItem
              key={work.id}
              image={work.image}
              title={work.title}
              description={work.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
