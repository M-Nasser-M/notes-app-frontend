import { Box, Container } from "@mui/material";
import { createContext, useEffect, useReducer } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./compoonents/NavBar/NavBar";
import {
  initialState,
  logInAction,
  loginReducer,
} from "./reducers/loginReducer";

export const appContext = createContext({});

function App() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(logInAction());
      navigate("/notes");
    }
  }, [navigate]);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      <Box className="App">
        <NavBar />
        <Container
          disableGutters={true}
          className="text-center"
          maxWidth={"xl"}
        >
          <Outlet />
        </Container>
      </Box>
    </appContext.Provider>
  );
}

export default App;
