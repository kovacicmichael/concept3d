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
  return (dispatch) => {
    return fetch("/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(location),
    })
      .then((res) => res.json())
      .then((json) => dispatch(addNewLocation(json)));
  };
};

export { fetchAllLocations, saveLocation };
