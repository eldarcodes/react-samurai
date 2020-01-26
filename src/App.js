import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <div className={classes.app__wrapper}>
        <div className={classes.main__wrapper}>
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
