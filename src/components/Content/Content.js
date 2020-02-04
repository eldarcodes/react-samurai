import React from "react";

import "./Content.scss";

import SideNav from "../SideNav/SideNav";
import MainContent from "../MainContent/MainContent";

const Content = props => {
  return (
    <div className="container">
      <div className="row">
        <SideNav />
        <MainContent />
      </div>
    </div>
  );
};

export default Content;
