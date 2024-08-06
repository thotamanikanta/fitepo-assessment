import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";

import { MenuOpen } from "@mui/icons-material";
import SidebarNav from "./SidebarNav";
import menus from "./menu";
import { Link } from "@mui/material";
import fitpeo_logo from "../../assets/images/fitpeo_logo.webp";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",

  borderRight: 0,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRight: "none",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  //   justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ setOpen, open }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ background: (theme) => theme.palette.primary.main }}>
        <Box sx={{ mr: 2, display: open ? "flex" : "none", ml: "-10px" }}>
          <Link
            // style={{ position: 'absolute', left: '430px' }}
            href="https://fitpeo.com/"
            target="_blank"
            underline="none"
            // sx={{ px: "20px", pt: "20px" }}
          >
            <img src={fitpeo_logo} width={180} height={46.932} alt="Fitpeo" />
          </Link>
        </Box>
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            color: "#fff",
            display: open ? "flex" : "none",
            ml: "4px",
            p: 1,
            backgroundColor: "#039092",

            "&:hover": {
              background: "#039092",
            },
          }}
        >
          <MenuOpen />
        </IconButton>
      </DrawerHeader>
      {/* <Divider /> */}
      <Box sx={{ background: "#F7F7F7", height: "16px" }} />
      <List disablePadding sx={{ pb: 2, overflow: "hidden" }}>
        {menus.map((item, index) => (
          <SidebarNav key={index} item={item} open={open} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
