const axios = require("axios");
const baseUrl = process.env.REACT_APP_SERVER_URL || "";

const login = async (user) => {
  try {
    const loginRes = await axios.post(`${baseUrl}/api/login/`, user);
    window.localStorage.setItem("token", loginRes.data.token);
    return loginRes.data;
  } catch (err) {
    console.error(err);
  }
};

export { login };
