import React from "react";
import "./App.css";
import { AboutMySelf } from "./components/AboutMySelf/AboutMySelf";
import { Header } from "./components/Header/Header";
import { SkillsList } from "./components/SkillsList/SkillsList";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMySelf />
      <SkillsList />
    </>
  );
};

export default App;
