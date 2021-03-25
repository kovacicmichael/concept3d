import { combineReducers } from "redux";
import Locations from "./LocationsReducer";
import Map from "./MapReducer";
import Error from "./ErrorReducer";

const RootReducer = combineReducers({
  Locations,
  Map,
  Error,
});

export default RootReducer;
