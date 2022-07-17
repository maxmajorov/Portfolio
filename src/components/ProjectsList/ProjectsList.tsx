import React from "react";
import classes from "./ProjectsList.module.scss";
import { v1 } from "uuid";
import { Title } from "../../common/components/Title/Title";
import social from "../../assets/img/social.png";
import todo from "../../assets/img/todo.jpg";
import quiz from "../../assets/img/quiz.jpg";
import { MySwiper } from "../../common/components/Swiper/Swiper";

export type WorksStateType = {
  id: string;
  title: string;
  description: string;
  image: { backgroundImage: string };
  link: string;
};

const worksState: Array<WorksStateType> = [
  {
    id: v1(),
    title: "Social Network",
    description:
      "Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Redux-form, Ant Design, Reselect",
    image: { backgroundImage: `url(${social})` },
    link: "https://github.com/maxmajorov/social-network",
  },
  {
    id: v1(),
    title: "Todo List",
    description:
      "Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Material-UI",
    image: { backgroundImage: `url(${todo})` },
    link: "https://todolist-react-redux-ts.herokuapp.com/",
  },
  {
    id: v1(),
    title: "Training Cards",
    description:
      "Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Material-UI",
    image: { backgroundImage: `url(${quiz})` },
    link: "https://maxmajorov.github.io/training-cards/",
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
