import { Home } from "@mui/icons-material";
import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../../App";
import { logOutAction } from "../../reducers/loginReducer";

function NavBar() {
  const Context = useContext(appContext);
  console.log(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    Context.dispatch(logOutAction());
    navigate("/login");
  };
  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <Container maxWidth={false} disableGutters={true}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "black", mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Home sx={{ fill: "white" }} />
          </Typography>

          <MenuItem sx={Context.state.loggedIn && { flexGrow: 1 }}>
            <Typography textAlign="center">
              <Link to="/notes">Notes</Link>
            </Typography>
          </MenuItem>
          {!Context.state.loggedIn && (
            <>
              <MenuItem>
                <Typography textAlign="center">
                  <Link to="/signup">SignUp</Link>
                </Typography>
              </MenuItem>
              <MenuItem sx={{ flexGrow: 1 }}>
                <Typography textAlign="center">
                  <Link to="/login">Login</Link>
                </Typography>
              </MenuItem>
            </>
          )}
          {Context.state.loggedIn && (
            <MenuItem>
              <Typography textAlign="center">
                <Link onClick={handleLogout} to="/login">
                  Logout
                </Link>
              </Typography>
            </MenuItem>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
