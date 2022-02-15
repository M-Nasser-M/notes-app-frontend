const axios = require("axios");
const baseUrl = process.env.REACT_APP_SERVER_URL || "";

let fetchNotesData = async () => {
  try {
    const notes = await axios.get(`${baseUrl}/api/notes/`, {
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    });
    return notes.data;
  } catch (err) {
    console.error(err);
  }
};

let deletNote = async (id) => {
  try {
    const note = await axios.delete(`${baseUrl}/api/notes/`, {
      params: { id: id },
    });
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

let saveNote = async (newNote) => {
  try {
    const note = await axios.post(`${baseUrl}/api/notes/`, newNote, {
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    });
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

let updateNote = async (newNote) => {
  try {
    const note = await axios.put(`${baseUrl}/api/notes/`, newNote);
    return note.data;
  } catch (err) {
    console.error(err);
  }
};

export { fetchNotesData, deletNote, saveNote, updateNote };
