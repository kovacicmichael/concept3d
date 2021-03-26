const initialState = {
  map: null,
  centerPoint: [39.750809, -104.99681],
  polygonMarkers: [],
};

const Map = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MAP_CENTER_POINT":
      return Object.assign({}, state, {
        centerPoint: action.data,
      });
    case "REMOVE_POLYGON_MARKER":
      state.polygonMarkers.splice(action.data, 1);
      return Object.assign({}, state, {
        polygonMarkers: state.polygonMarkers,
      });
    case "ADD_POLYGON_MARKER":
      return Object.assign({}, state, {
        polygonMarkers: state.polygonMarkers.concat(action.data),
      });
    case "SET_MAP_REFERENCE":
      return Object.assign({}, state, {
        map: action.data,
      });
    case "UPDATE_POLYGON_MARKERS":
      return Object.assign({}, state, {
        polygonMarkers: action.data,
      });

    default:
      return state;
  }
};

export default Map;
