import React from "react";
import { SkillsItem } from "../SkillsItem/SkillsItem";
import classes from "./SkillsList.module.css";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import ts from "../../assets/img/ts.png";
import { v1 } from "uuid";
import { Title } from "../../common/components/Title/Title";

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
    <section id="skills" className={classes.skillsBlock}>
      <Title title="my skils" />
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
    </section>
  );
};
