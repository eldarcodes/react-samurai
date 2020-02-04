import React from "react";
import Profile from "../../pages/Profile/Profile";
import {Route} from "react-router-dom";
import Messages from "../../pages/Messages/Messages";
import Music from "../../pages/Music";
import Settings from "../../pages/Settings";

const MainContent = () => {
  return (
    <div className="col s10">
      <Route exact path="/">
        <Profile />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </div>
  );
};

export default MainContent;
