const initialState = {
  centerPoint: [39.750809, -104.99681],
};

const Map = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MAP_CENTER_POINT":
      return Object.assign({}, state, {
        centerPoint: action.data,
      });
    default:
      return state;
  }
};

export default Map;
