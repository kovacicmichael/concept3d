require("isomorphic-fetch");

//Dispatchers
const setErrorMessage = (message) => {
  return {
    type: "SET_ERROR_MESSAGE",
    data: message,
  };
};

export { setErrorMessage };
