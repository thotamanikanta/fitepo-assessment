import { Navigate, Route, Routes } from "react-router";

import { Box, useMediaQuery } from "@mui/material";
import Dashboard from "./Dashboard";
import Sidebar, { DrawerHeader as DrawerHeader1 } from "./Layout/Sidebar";
import { useState } from "react";
import Header from "./Layout/Header";
import TempSidebar, { DrawerHeader } from "./Layout/Sidebar/TempSidebar";
import Statictics from "./Statistics";
import Products from "./Products";
import Settings from "./Settings";
import Help from "./Help";
import Cookies from "js-cookie";

const drawerWidth = 240;

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const minWidth = useMediaQuery("(min-width:768px)");

  const loginToken = Cookies.get("loginToken");
  if (loginToken === undefined) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Header setOpen={setOpen} open={open} />
        {minWidth ? (
          <Sidebar open={open} setOpen={setOpen} />
        ) : (
          <TempSidebar open={open} setOpen={setOpen} />
        )}

        <Box
          component={"div"}
          sx={{
            flexGrow: 2,
            px: "16px",
            pb: "16px",
            marginLeft: minWidth ? 0 : `-${drawerWidth}px`,
          }}
        >
          {minWidth ? <DrawerHeader1 /> : <DrawerHeader />}
          <Box sx={{ background: "#F7F7F7", height: "16px" }} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statictics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
