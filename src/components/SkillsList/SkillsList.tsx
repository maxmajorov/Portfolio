import React from "react";
import { SkillsItem } from "../SkillsItem/SkillsItem";
import classes from "./SkillsList.module.scss";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import ts from "../../assets/img/ts.png";
import { v1 } from "uuid";
import { Title } from "../../common/components/Title/Title";
//@ts-ignore
import Fade from "react-reveal/Fade";

export const SkillsList: React.FC = () => {
  type SkillsStateType = {
    id: string;
    title: string;
    persent: number;
    logo: string;
  };
  const skillsState: Array<SkillsStateType> = [
    {
      id: v1(),
      title: "React",
      persent: 90,
      logo: react,
    },
    {
      id: v1(),
      title: "Redux",
      persent: 80,
      logo: redux,
    },
    {
      id: v1(),
      title: "TS / JS / ES6+",
      persent: 70,
      logo: ts,
    },
    {
      id: v1(),
      title: "Axios / REST API",
      persent: 85,
      logo: ts,
    },
    {
      id: v1(),
      title: "Formik / Redux-form",
      persent: 80,
      logo: ts,
    },
    {
      id: v1(),
      title: "Material UI / Ant Design",
      persent: 90,
      logo: ts,
    },
    {
      id: v1(),
      title: "HTML / CSS / SCSS",
      persent: 90,
      logo: ts,
    },
    {
      id: v1(),
      title: "TDD / Storybook",
      persent: 70,
      logo: ts,
    },
    {
      id: v1(),
      title: "Git / Github",
      persent: 75,
      logo: ts,
    },
  ];

  return (
    <section id="skills" className={classes.skills}>
      <Fade bottom>
        <div className={classes.container}>
          <Title title="my skils" />
          <ul className={classes.list}>
            {skillsState.map((skill) => (
              <SkillsItem
                key={skill.id}
                logo={skill.logo}
                title={skill.title}
                persent={skill.persent}
              />
            ))}
          </ul>
        </div>
      </Fade>
    </section>
  );
};
