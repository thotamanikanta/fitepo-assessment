import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import MainLayout from "./MainLayout";
import { ThemeProvider, createTheme } from "@mui/material";
import { mainTheme } from "./themes/maintheme";

const theme = createTheme(mainTheme);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
