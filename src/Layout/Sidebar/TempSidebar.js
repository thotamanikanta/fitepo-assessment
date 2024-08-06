import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import menus from "./menu";
import SidebarNav from "./SidebarNav";
import { Link } from "@mui/material";
import fitpeo_logo from "../../assets/images/fitpeo_logo.webp";
import { MenuOpen } from "@mui/icons-material";

const drawerWidth = 240;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // justifyContent: "flex-end",
}));

const TempSidebar = ({ open, setOpen }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",

          borderRight: "none",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
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
      <Divider />
      <Box sx={{ background: "#F7F7F7", height: "16px" }} />
      <List disablePadding sx={{ pb: 2, overflow: "hidden" }}>
        {menus.map((item, index) => (
          <SidebarNav
            key={index}
            item={item}
            open={open}
            setOpen={setOpen}
            smallDevice={true}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default TempSidebar;
