import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Mailbox",
    icon: <EmailIcon />,
    link: "/mailbox",
  },
  {
    title: "Analytics",
    icon: <InsertChartIcon />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Friends",
    icon: <Diversity3Icon />,
    link: "/friends",
  },
  {
    title: "Images",
    icon: <PermMediaIcon />,
    link: "/images",
  },
];
