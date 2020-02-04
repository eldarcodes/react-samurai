import React from "react";
import {NavLink} from "react-router-dom";

import "./SideNav.scss";

const SideNav = () => {
  const links = [
    {
      name: "Profile",
      path: "/"
    },
    {
      name: "Messages",
      path: "/messages"
    },
    {
      name: "Music",
      path: "/music"
    },
    {
      name: "Settings",
      path: "/settings"
    }
  ];

  return (
    <div className="col s2">
      <div className="side_nav">
        {links.map(item => {
          return (
            <NavLink
              to={item.path}
              exact
              className="waves-effect waves-light btn light-blue accent-4"
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
