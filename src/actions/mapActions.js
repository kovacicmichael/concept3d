require("isomorphic-fetch");

const storeAllPolygons = (polygonMarkers) => {
  return {
    type: "STORE_POLYGON_MARKERS",
    data: polygonMarkers,
  };
};

//Dispatchers
const setMap = (map) => {
  return {
    type: "SET_MAP_REFERENCE",
    data: map,
  };
};

const setMapCenter = (center) => {
  return {
    type: "UPDATE_MAP_CENTER_POINT",
    data: center,
  };
};

const fetchAllPolygons = () => {
  return async (dispatch) => {
    let r = await fetch("/polygonMarkers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!r.ok) throw new Error(r.status + ": " + r.statusText);
    let res = await r.json();
    dispatch(storeAllPolygons(res));
  };
};

export { setMap, setMapCenter, fetchAllPolygons };
