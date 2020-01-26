import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <button>Profile</button>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <button>Messages</button>
      </div>
      <div className={classes.item}>
        <button>News</button>
      </div>
      <div className={classes.item}>
        <button>Music</button>
      </div>
      <div className={classes.item}>
        <button>Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;
