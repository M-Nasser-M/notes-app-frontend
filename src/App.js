import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./compoonents/NavBar/NavBar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) navigate("/notes");

    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <Box className="App">
      <NavBar />
      <Container disableGutters={true} className="text-center" maxWidth={"xl"}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
