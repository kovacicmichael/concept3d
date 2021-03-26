const initialState = {
  map: null,
  centerPoint: [39.750809, -104.99681],
  polygonMarkers: [
    {
      id: "id1",
      name: "Denver",
      lat: 39.742043,
      lng: -104.991531,
    },
    {
      id: "id2",
      name: "LA",
      lat: 34.052235,
      lng: -118.243683,
    },
    {
      id: "id3",
      name: "Boston",
      lat: 42.364506,
      lng: -71.038887,
    },
  ],
};

const Map = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MAP_CENTER_POINT":
      return Object.assign({}, state, {
        centerPoint: action.data,
      });
    case "MARKER_TO_POLYGON":
      let index = state.polygonMarkers.findIndex((m) => m.id == action.data.id);
      if (index != -1) {
        let n = state.polygonMarkers.splice(index, 1);
        return Object.assign({}, state, {
          polygonMarkers: state.polygonMarkers,
        });
      }
      return Object.assign({}, state, {
        polygonMarkers: state.polygonMarkers.concat(action.data),
      });
    case "SET_MAP_REFERENCE":
      return Object.assign({}, state, {
        map: action.data,
      });

    default:
      return state;
  }
};

export default Map;
