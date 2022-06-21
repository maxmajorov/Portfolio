import React, { Dispatch, SetStateAction } from "react";
import { MenuItemsType } from "../../../components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./Menu.module.scss";

type MenuPropsType = {
  menuItems: MenuItemsType;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const Menu: React.FC<MenuPropsType> = ({
  menuItems,
  active,
  setActive,
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff0066",
      },
    },
  });

  return (
    <div
      className={active ? `${classes.menu} ${classes.active}` : classes.menu}
      onClick={() => setActive(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation}>
        <ul>
          {menuItems.map((item, ind) => {
            return (
              <li key={ind}>
                <a href={item.href}> {item.title}</a>
              </li>
            );
          })}
        </ul>
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
  );
};
