const axios = require("axios");

let fetchNotesData = async () => {
  try {
    const notes = await axios.get("http://localhost:3001/api/notes/");
    return notes.data;
  } catch (err) {
    console.error(err);
  }
};

let deletNote = async (id) => {
  try {
    const note = await axios.delete("http://localhost:3001/api/notes/", {
      params: { id: id },
    });
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

let saveNote = async (newNote) => {
  try {
    const note = await axios.post("http://localhost:3001/api/notes/", newNote);
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

let updateNote = async (newNote) => {
  try {
    const note = await axios.put("http://localhost:3001/api/notes/", newNote);
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

export { fetchNotesData, deletNote, saveNote, updateNote };
