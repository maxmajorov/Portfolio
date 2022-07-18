import React from "react";
import classes from "./Button.module.scss";

type ButtonPropsType = {
  title?: string;
};

export const Button: React.FC<ButtonPropsType> = ({ title }) => {
  return (
    <div className={classes.centeredButton}>
      <button
        className={classes.btn}
        type={"submit"}
        onClick={() => console.log("click")}
      >
        message me
      </button>
    </div>
  );
};
