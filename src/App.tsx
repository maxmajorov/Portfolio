import React from "react";
import "./App.css";
import { AboutMySelf } from "./components/AboutMySelf/AboutMySelf";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { SkillsList } from "./components/SkillsList/SkillsList";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMySelf />
      <SkillsList />
      <ProjectsList />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
