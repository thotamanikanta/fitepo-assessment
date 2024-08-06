import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Logout,
  Mail,
  More,
  Notifications,
  PowerSettingsNew,
  RestartAlt,
  Search,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
} from "@mui/material";
import CustomPopover from "../../components/CustomPopover";

import fitpeo_logo from "../../assets/images/fitpeo_logo.webp";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Box sx={{ mr: 2, display: open ? "none" : "flex", ml: "-20px" }}>
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
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            ml: "8px",
            mr: "20px",
            p: 1,
            backgroundColor: "#039092",
            "&:hover": {
              background: "#039092",
            },
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
                borderColor: "#039092", // Default border color
                borderWidth: "2px",
                color: "white",
                borderRadius: "20px",
              },
              "&:hover fieldset": {
                borderColor: "#039092", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#039092", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#039092", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#039092", // Label color when focused
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
            sx={{
              backgroundColor: "#039092",
              p: 1,
              "&:hover": {
                color: "#039092",
                background: "#039092",
              },
            }}
          >
            <Mail />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            sx={{
              backgroundColor: "#039092",
              p: 1,
              "&:hover": {
                background: "#039092",
              },
            }}
          >
            <Settings />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            sx={{
              backgroundColor: "#039092",
              p: 1,
              "&:hover": {
                background: "#039092",
              },
            }}
          >
            <Notifications />
          </IconButton>

          <CustomPopover
            triggerButton={
              <Tooltip title={"Iron Man"} placement="bottom">
                <Avatar
                  alt="T"
                  src="https://mui.com/static/images/avatar/2.jpg"
                  sx={{ width: "24px", height: "24px" }}
                />
              </Tooltip>
            }
          >
            <nav>
              <List disablePadding sx={{ p: "0px 16px" }}>
                <ListItemButton
                  onClick={() => {
                    Cookies.remove("loginToken");
                    navigate("/signin", { replace: true });
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ my: 0 }} />
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <PowerSettingsNew />
                  </ListItemIcon>
                  <ListItemText primary="Shutdown" sx={{ my: 0 }} />
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <RestartAlt />
                  </ListItemIcon>
                  <ListItemText primary="Reboot" sx={{ my: 0 }} />
                </ListItemButton>
              </List>
            </nav>
          </CustomPopover>
        </Box>
        <Box></Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, pl: 1 }}>
          <CustomPopover triggerButton={<More sx={{ color: "white" }} />}>
            <nav>
              <List disablePadding sx={{ p: "0px 16px" }}>
                <ListItemButton
                  onClick={() => {
                    Cookies.remove("loginToken");
                    navigate("/signin", { replace: true });
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Email" sx={{ my: 0 }} />
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ my: 0 }} />
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText primary="Notification" sx={{ my: 0 }} />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    Cookies.remove("loginToken");
                    navigate("/signin", { replace: true });
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ my: 0 }} />
                </ListItemButton>
              </List>
            </nav>
          </CustomPopover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
