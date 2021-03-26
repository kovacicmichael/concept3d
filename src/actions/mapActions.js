require("isomorphic-fetch");

const removePolygonMarker = (index) => {
  return {
    type: "REMOVE_POLYGON_MARKER",
    data: index,
  };
};

const addPolygonMarker = (marker) => {
  return {
    type: "ADD_POLYGON_MARKER",
    data: marker,
  };
};

const storeAllPolygons = (markers) => {
  return {
    type: "UPDATE_POLYGON_MARKERS",
    data: markers,
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
    dispatch(storeAllPolygons(res.polygonMarkers));
  };
};

const savePolygonMarker = (marker) => {
  return async (dispatch) => {
    let r = await fetch("/polygonMarkers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(marker),
    });
    if (!r.ok) throw new Error(r.status + ": " + r.statusText);
    let res = await r.json();
    dispatch(addPolygonMarker(marker));
  };
};

const deletePolygonMarker = (marker, index) => {
  return async (dispatch) => {
    let r = await fetch("/polygonMarkers", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(marker),
    });
    if (!r.ok) throw new Error(r.status + ": " + r.statusText);
    let res = await r.json();
    dispatch(removePolygonMarker(index));
  };
};

export {
  setMap,
  setMapCenter,
  fetchAllPolygons,
  deletePolygonMarker,
  savePolygonMarker,
};
