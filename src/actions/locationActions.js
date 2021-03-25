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

export { fetchAllLocations, saveLocation };
