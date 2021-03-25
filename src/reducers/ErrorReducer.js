const initialState = {
  message: "This is a test.",
  visible: false,
};

const Map = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return Object.assign({}, state, {
        message: action.data,
        visible: true,
      });
    case "CLOSE_ERROR_MESSAGE":
      return Object.assign({}, state, {
        message: "",
        visible: action.data,
      });
    default:
      return state;
  }
};

export default Map;
