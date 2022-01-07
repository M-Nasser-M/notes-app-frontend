import { Box, Container } from "@mui/material";
import "./App.css";
import NotesGrid from "./compoonents/NotesGrid/NotesGrid";

function App() {
  return (
    <Box className="App">
      <Container className="text-center" maxWidth={"xl"}>
        <NotesGrid />
      </Container>
    </Box>
  );
}

export default App;
