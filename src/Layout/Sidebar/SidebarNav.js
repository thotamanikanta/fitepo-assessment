import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

const menuBefore = {
  left: 0,
  top: 0,
  content: `''`,
  position: "absolute",
  display: "inline-block",
  width: "4px",
  height: "100%",
  backgroundColor: "transparent",
};

const SidebarNav = ({ item, setOpen, open, smallDevice }) => {
  const location = useLocation();

  if (!item) return null;

  return (
    <ListItemButton
      component={"li"}
      sx={{
        p: 0,
        overflow: "hidden",
        borderRadius: "4",
        margin: "0",
        "&::before": menuBefore,
        "&:hover": {
          ...(location.pathname.includes(item.uri)
            ? {
                color: "#FFFFFF",
                backgroundColor: "#14C9CB",
              }
            : {
                color: "#14C9CB",
                backgroundColor: "#E9ECEF",
              }),
        },
        ...(location.pathname.includes(item.uri)
          ? {
              color: "#FFFFFF",
              backgroundColor: "#14C9CB",
              // boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)'
            }
          : {}),
      }}
      onClick={() => {
        if (smallDevice) setOpen(false);
      }}
    >
      <Link
        underline={"none"}
        component={RouterLink}
        to={item.uri}
        {...(item.target ? { target: item.target } : {})}
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          color: "inherit",
          p: "8px",
        }}
      >
        <ListItemIcon
          sx={{
            color: "inherit",
            p: "4px",
            pr: "8px",
            minWidth: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.icon}
        </ListItemIcon>

        <ListItemText
          primary={item.label}
          sx={{
            opacity: open ? 1 : 0,
            m: 0,
            "& .MuiTypography-root": {
              whiteSpace: "nowrap",
              overflow: "hidden",
              // textOverflow: 'ellipsis',
              lineHeight: "24px",
              fontSize: "16px",
              letterSpacing: "1px",
            },
          }}
        />
      </Link>
    </ListItemButton>
  );
};

export default SidebarNav;
