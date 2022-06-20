import React, { Dispatch, SetStateAction } from "react";
import { MenuItemsType } from "../../../components/Header/Header";
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
    </div>
  );
};
