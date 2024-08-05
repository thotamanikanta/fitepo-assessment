import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Mail,
  More,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { Avatar, InputAdornment, TextField } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ setOpen, open }) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <TextField
          type="search"
          sx={{
            "& .MuiInputBase-input": {
              padding: (theme) => theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
              color: "#fff",
              width: "100%",
            },
            "& .MuiTextField-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3c475f", // Default border color
                borderWidth: "2px",
                color: "white",
              },
              "&:hover fieldset": {
                borderColor: "#3c475f", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3c475f", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#3c475f", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#3c475f", // Label color when focused
            },
          }}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <IconButton
            size="large"
            color="inherit"
            sx={{ backgroundColor: "#3c475f" }}
          >
            <Mail />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            sx={{ backgroundColor: "#3c475f" }}
          >
            <Settings />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ backgroundColor: "#3c475f" }}
          >
            <Notifications />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            sx={{ backgroundColor: "#3c475f" }}
          >
            <Avatar
              alt="T"
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{ width: "24px", height: "24px" }}
            />
          </IconButton>
        </Box>
        <Box></Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            // onClick={handleMobileMenuOpen}
            color="primary"
          >
            <More />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
