import React from "react";
import "../App.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((item, idx) => (
          <li
            className="row"
            id={window.location.pathname === item.link ? "active" : ""}
            key={idx}
            onClick={() => {
              window.location.pathname = item.link;
            }}
          >
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
