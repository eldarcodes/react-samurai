import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.HeaderWrapper}>
        <img className={classes.header__img} alt="logo" src="react.svg" />
      </div>
    </header>
  );
};

export default Header;
