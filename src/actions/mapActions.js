require("isomorphic-fetch");

//Dispatchers
const setMapCenter = (center) => {
  return {
    type: "UPDATE_MAP_CENTER_POINT",
    data: center,
  };
};

export { setMapCenter };
