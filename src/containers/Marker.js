/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import { connect } from "react-redux";
import Marker from "../components/Marker";

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleMarker: (marker) => {
      dispatch({
        type: "MARKER_TO_POLYGON",
        data: marker,
      });
      dispatch({
        type: "UPDATE_POLYGON_MARKERS",
      });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Marker);
