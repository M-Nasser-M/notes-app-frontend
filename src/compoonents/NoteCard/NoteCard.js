import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { deletNote } from "../../services/NotesService";
import "./NoteCard.css";

function NoteCard({
  content,
  title,
  id,
  setNotesViewList,
  notesViewList,
  setNoteToEdit,
  openModal,
  important,
}) {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      {important && <Box className="ribbon">Imp</Box>}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions style={{ textAlign: "left" }}>
        <Button
          onClick={async () => {
            const deletedNote = await deletNote(id);
            if (deletedNote.deletedCount === 1) {
              setNotesViewList(notesViewList.filter((note) => note.id !== id));
            }
          }}
          size="medium"
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            setNoteToEdit({ id, title, content, important });
            openModal(true);
          }}
          style={{ marginLeft: "auto" }}
          size="medium"
        >
          Edit
        </Button>
        {/* 
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default NoteCard;
