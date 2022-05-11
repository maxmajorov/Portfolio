import React from "react";
import { SkillsItem } from "../SkillsItem/SkillsItem";
import classes from "./SkillsList.module.css";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import ts from "../../assets/img/ts.png";
import devider from "../../assets/img/devider.svg";
import { v1 } from "uuid";

export const SkillsList: React.FC = () => {
  type SkillsStateType = {
    id: string;
    title: string;
    description: string;
    logo: string;
  };
  const skillsState: Array<SkillsStateType> = [
    {
      id: v1(),
      title: "React",
      description: "Create applications with React library",
      logo: react,
    },
    {
      id: v1(),
      title: "Redux",
      description: "Use Redux / React-Redux with React library",
      logo: redux,
    },
    {
      id: v1(),
      title: "JS / TS",
      description: "Create applications with TS",
      logo: ts,
    },
  ];

  return (
    <div className={classes.skills__container}>
      <h2 className={classes.title}>My Skills</h2>
      <img src={devider} alt="devider" />
      <ul className={classes.skills__list}>
        {skillsState.map((skill) => (
          <SkillsItem
            key={skill.id}
            logo={skill.logo}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </div>
  );
};
