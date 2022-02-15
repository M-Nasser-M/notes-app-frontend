import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { UploadRounded } from "@mui/icons-material";
import { createUser } from "../../services/UserService";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async () => {
    const user = await createUser({ userName, firstName, lastName, password });
    console.log(user);
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
          />{" "}
          <TextField
            required={true}
            sx={{ my: 2 }}
            id="firstNam"
            label="firstName"
            variant="standard"
            onChange={(e) => {
              e.preventDefault();
              setFirstName(e.target.value);
            }}
          />
          <TextField
            required={true}
            sx={{ my: 2 }}
            id="lastName"
            label="lastName"
            variant="standard"
            onChange={(e) => {
              e.preventDefault();
              setLastName(e.target.value);
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
          onClick={handleSignUp}
          endIcon={<UploadRounded />}
        >
          SignUp
        </Button>
      </CardContent>
    </Card>
  );
}

export default SignUp;
