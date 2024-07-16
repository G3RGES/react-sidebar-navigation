import React from "react";
import "../App.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((item, idx) => (
          <li
            className=""
            key={idx}
            onClick={() => {
              window.location.href(item.link);
            }}
          >
            <div className="">{item.icon}</div>
            <div className="">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
