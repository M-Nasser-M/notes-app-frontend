const axios = require("axios");
const baseUrl = process.env.REACT_APP_SERVER_URL || "";

let createUser = async (newUser) => {
  try {
    const user = await axios.post(`${baseUrl}/api/users/`, newUser);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export { createUser };
