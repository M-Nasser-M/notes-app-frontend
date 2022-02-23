const initialState = {
  loggedIn: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, loggedIn: true };
    case "LOG_OUT":
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

const logInAction = () => {
  return { type: "LOG_IN" };
};
const logOutAction = () => {
  return { type: "LOG_OUT" };
};

export { loginReducer, logInAction, logOutAction, initialState };
