import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/mainPage";
import Routes from "./routes/routes";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red,
    },
    secondary: {
      main: blue,
    },
    error: {
      main: green,
    },
  },
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>
);
