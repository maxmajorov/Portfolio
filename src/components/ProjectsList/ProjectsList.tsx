import React from "react";
import classes from "./ProjectsList.module.scss";
import { v1 } from "uuid";
import { Title } from "../../common/components/Title/Title";
import social from "../../assets/img/social.jpg";
import todo from "../../assets/img/todo.jpg";
import { MySwiper } from "../../common/components/Swiper/Swiper";

export type WorksStateType = {
  id: string;
  title: string;
  description: string;
  image: { backgroundImage: string };
};

const worksState: Array<WorksStateType> = [
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

export const ProjectsList: React.FC = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.container}>
        <Title title="my projects" />
        <MySwiper projects={worksState} />
      </div>
    </section>
  );
};
