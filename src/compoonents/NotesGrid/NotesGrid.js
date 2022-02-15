import { Fab, Grid, Modal, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchNotesData } from "../../services/NotesService";
import { Add, Logout } from "@mui/icons-material";
import "./NotesGrid.css";
import { Box } from "@mui/system";
import NewNoteForm from "../NoteForm/NoteForm";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NotesGrid() {
  const [notes, setNotes] = useState([]);
  const [notesToView, setNoteToView] = useState([]);
  const [open, setOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({});
  const [filter, setFilter] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filterNotes = () => setFilter(!filter);
  const navigate = useNavigate();
  useEffect(() => {
    fetchNotesData().then((res) => {
      setNotes(res);
      setNoteToView(res);
    });
  }, []);

  useEffect(() => {
    filter
      ? setNoteToView(notes.filter((note) => note.important))
      : setNoteToView(notes);
  }, [filter, notes]);

  return (
    <Grid container paddingTop={5} spacing={2}>
      {notes ? (
        notesToView.map((note) => {
          return (
            <Grid key={note.id} item xs={6} md={4} lg={3}>
              <NoteCard
                content={note.content}
                title={note.title}
                id={note.id}
                important={note.important}
                notesViewList={notes}
                setNotesViewList={setNotes}
                setNoteToEdit={setNoteToEdit}
                openModal={setOpen}
              />
            </Grid>
          );
        })
      ) : (
        <h1>No notes Found</h1>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewNoteForm
            noteToEdit={noteToEdit}
            setOpen={setOpen}
            setNotes={setNotes}
            notes={notes}
          />
        </Box>
      </Modal>
      <Box className="controlPanel">
        <Fab color="primary" sx={{ marginRight: 1 }}>
          <Switch onChange={filterNotes} />
        </Fab>
        <Fab
          sx={{ marginRight: 1 }}
          onClick={() => {
            setNoteToEdit({});
            handleOpen();
          }}
          color="primary"
        >
          <Add></Add>
        </Fab>
        <Fab
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          color="primary"
        >
          <Logout />
        </Fab>
      </Box>
    </Grid>
  );
}

export default NotesGrid;
