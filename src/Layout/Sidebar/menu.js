import React from "react";

import {
  Addchart,
  HelpOutlineSharp,
  Home,
  Settings,
  StorefrontOutlined,
} from "@mui/icons-material";

const menus = [
  {
    uri: "/dashboard",
    label: "Dashboard",
    type: "nav-item",
    icon: <Home sx={{ fontSize: 24 }} />,
  },
  {
    uri: "/statistics",
    label: "Statictics",
    type: "nav-item",
    icon: <Addchart sx={{ fontSize: 24 }} />,
  },
  {
    uri: "/products",
    label: "Products",
    type: "nav-item",
    icon: <StorefrontOutlined sx={{ fontSize: 24 }} />,
  },

  {
    uri: "/settings",
    label: "Settings",
    type: "nav-item",
    icon: <Settings sx={{ fontSize: 24 }} />,
  },
  {
    uri: "/help",
    label: "Help",
    type: "nav-item",
    icon: <HelpOutlineSharp sx={{ fontSize: 24 }} />,
  },
];

export default menus;
