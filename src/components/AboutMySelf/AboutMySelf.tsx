import React from "react";
import classes from "./AboutMySelf.module.scss";
import avatar from "../../assets/img/avatar.jpg";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
//@ts-ignore;
import ReactTypingEffect from "react-typing-effect";

const particlesOpt = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 90,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const AboutMySelf: React.FC = () => {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };

  // const particlesLoaded = (container: any) => {
  //   console.log(container);
  // };
  return (
    <section id="home" className={classes.mainBlock}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        //@ts-ignore
        options={particlesOpt}
      />
      <div className={classes.container}>
        <div className={classes.introduce}>
          <h4 className={classes.greeting}>Hi There</h4>
          <h1 className={classes.name}>I'm Maxim Predko</h1>
          <ReactTypingEffect
            className={classes.specialization}
            text={["Front-End Developer", "React", "Redux", "TypeScript"]}
          />
          <a href="#contacts" className={classes.btn}>
            Contact me
          </a>
        </div>
        <div className={classes.avatar}>
          <div className={classes.frame}></div>
          <div className={classes.photo}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};
