import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff0066",
      },
    },
  });

  return (
    <footer className={classes.footerSection}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <a href="#contact" className={classes.logoStyle}>
              MAX<span style={{ color: "#ff0066" }}>I</span>M
            </a>
          </div>
          <ThemeProvider theme={theme}>
            <div className={classes.social}>
              <ul>
                <li>
                  <a href="https://t.me/maxpredko" target="blank">
                    <TelegramIcon fontSize={"large"} color={"primary"} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/maxim-predko/"
                    target="blank"
                  >
                    <LinkedInIcon fontSize={"large"} color={"primary"} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/maxmajorov" target="blank">
                    <GitHubIcon fontSize={"large"} color={"primary"} />
                  </a>
                </li>
                <li>
                  <a href="#contacts">
                    <EmailIcon fontSize={"large"} color={"primary"} />
                  </a>
                </li>
              </ul>
            </div>
          </ThemeProvider>
        </div>
      </div>
      <div className={classes.copyright}>
        <small>&copy; 2022 maxpredko. &nbsp;All rights reserved.</small>
      </div>
    </footer>
  );
};
