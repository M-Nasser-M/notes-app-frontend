import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { saveNote, updateNote } from "../../services/NotesService";

function NewNoteForm({ setOpen, notes, setNotes, noteToEdit }) {
  const [notetitle, setNotetitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [important, setImportant] = useState(false);

  useEffect(() => {
    if (noteToEdit) {
      setNotetitle(noteToEdit.title);
      setNoteContent(noteToEdit.content);
      setImportant(noteToEdit.important);
    }
  }, [noteToEdit]);

  return (
    <Box action="">
      <TextField
        id="noteTitle"
        label="Note Title"
        variant="standard"
        style={{ marginBottom: 40, width: "100%" }}
        onChange={(e) => setNotetitle(e.target.value)}
        value={notetitle || ""}
      />
      <TextField
        multiline={true}
        required
        minRows={3}
        placeholder="Note Content*"
        style={{ width: "100%" }}
        onChange={(e) => setNoteContent(e.target.value)}
        value={noteContent || ""}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={important || false}
              onChange={(e) => setImportant(e.target.checked)}
            />
          }
          label="important"
        />
        <Button
          onClick={async () => {
            let savedNote;
            if (noteToEdit.id) {
              savedNote = await updateNote({
                id: noteToEdit.id,
                title: notetitle,
                content: noteContent,
                important: important,
              });
              notes[notes.findIndex((note) => note.id === savedNote.id)] =
                savedNote;
              setNotes(notes);
            } else {
              savedNote = await saveNote({
                title: notetitle,
                content: noteContent,
                important: important,
              });
              setNotes([...notes, savedNote]);
            }

            setOpen(false);
          }}
          variant="contained"
        >
          Save
        </Button>
      </FormGroup>
    </Box>
  );
}

export default NewNoteForm;
