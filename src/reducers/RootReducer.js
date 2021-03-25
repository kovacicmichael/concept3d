import { combineReducers } from "redux";
import Locations from "./LocationsReducer";
import Map from "./MapReducer";

const RootReducer = combineReducers({
  Locations,
  Map,
});

export default RootReducer;
