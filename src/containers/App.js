import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../style/App.css";
import { fetchAllLocations } from "../actions/locationActions";
import { fetchAllPolygons } from "../actions/mapActions";
import App from "../components/App";

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    map: state.Map,
    error: state.Error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations, fetchAllPolygons }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
