require("isomorphic-fetch");

// Dispatchers
const storeAllLocations = (locations) => {
  return {
    type: "STORE_LOCATIONS",
    data: locations.locations,
  };
};

const addNewLocation = (location) => {
  return {
    type: "ADD_NEW_LOCATION",
    data: location,
  };
};

const storeAllPolygons = (polygonMarkers) => {
  return {
    type: "STORE_POLYGON_MARKERS",
    data: polygonMarkers,
  };
};

// Service Requests
const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch("/locations", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((locations) => locations.json())
      .then((json) => dispatch(storeAllLocations(json)));
  };
};

const saveLocation = (location) => {
  return async (dispatch) => {
    let r = await fetch("/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(location),
    });
    if (!r.ok) throw new Error(r.status + ": " + r.statusText);
    let res = await r.json();
    dispatch(addNewLocation(res));
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

export { fetchAllLocations, saveLocation, fetchAllPolygons };
