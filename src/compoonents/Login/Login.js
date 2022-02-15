import { Button, Card, CardContent, TextField } from "@mui/material";
import { LoginRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { login } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = await login({ userName, password });
    if (loginData.token) navigate("/notes");
  };

  return (
    <Card
      sx={{
        width: 400,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <TextField
            required={true}
            sx={{ my: 2 }}
            id="userName"
            label="userName"
            variant="standard"
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
          />
          <TextField
            required={true}
            sx={{ my: 2 }}
            id="password"
            label="password"
            type="password"
            variant="standard"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Button
          sx={{ mr: 2 }}
          variant="contained"
          onClick={handleLogin}
          endIcon={<LoginRounded />}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  );
}

export default Login;
