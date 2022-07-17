import React, { useState } from "react";
import { Menu } from "../../common/components/Menu/Menu";
import classes from "./Header.module.scss";

type ItemType = {
  href: string;
  title: string;
  isActive: boolean;
};
export type MenuItemsType = Array<ItemType>;

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuItems = [
    { href: "#home", title: "Home", isActive: false },
    { href: "#skills", title: "Skills", isActive: false },
    { href: "#projects", title: "Projects", isActive: false },
    { href: "#contacts", title: "Contacts", isActive: false },
  ];
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.siteMenu}>
          <div className={classes.inner}>
            <div className={classes.logo}>
              <a href="#contact" className={classes.logoStyle}>
                MAX<span style={{ color: "#ff0066" }}>I</span>M
              </a>
            </div>

            <div className="menu">
              <nav className="burger">
                <div
                  className="burgerBtn"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  <span />
                </div>
              </nav>
            </div>

            <Menu
              menuItems={menuItems}
              active={menuActive}
              setActive={setMenuActive}
            />
            {/* <nav className={classes.navigation}>
              <ul className={classes.navigation__list}>
                <li className={classes.navigation__item}>
                  <a href="#home">Home</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#skills">Skills</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#projects">Projects</a>
                </li>

                <li className={classes.navigation__item}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  );
};
