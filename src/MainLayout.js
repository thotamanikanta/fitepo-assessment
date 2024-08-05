import { Navigate, Route, Routes } from "react-router";

import { Box, Typography, useMediaQuery } from "@mui/material";
import Dashboard from "./Dashboard";
import Sidebar, { DrawerHeader as DrawerHeader1 } from "./Layout/Sidebar";
import { useState } from "react";
import Header from "./Layout/Header";
import TempSidebar, { DrawerHeader } from "./Layout/Sidebar/TempSidebar";

// import IdleTimeout from './pages/components/IdleTimeout';

const drawerWidth = 240;

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const minWidth = useMediaQuery("(min-width:768px)");
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* <SideBar drawerWidth={drawerWidth} />
      // <Header drawerWidth={drawerWidth} /> */}
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
            marginLeft: `-${drawerWidth}px`,
          }}
        >
          {minWidth ? <DrawerHeader1 /> : <DrawerHeader />}

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
