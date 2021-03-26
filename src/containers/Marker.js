/*eslint-disable no-unused-vars*/
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Marker from "../components/Marker";
import { bindActionCreators } from "redux";
import { savePolygonMarker, deletePolygonMarker } from "../actions/mapActions";

class MarkerContainer extends PureComponent {
  handleMarkerClick(marker) {
    let index = this.props.markers.findIndex((m) => m.id == marker.id);
    if (index < 0) {
      this.props.savePolygonMarker(marker);
    } else {
      this.props.deletePolygonMarker(marker, index);
    }
  }
  render() {
    let p = {
      ...this.props,
      handleMarkerClick: this.handleMarkerClick.bind(this),
    };
    return <Marker {...p} />;
  }
}

const mapStateToProps = (state) => {
  return {
    markers: state.Map.polygonMarkers,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    { savePolygonMarker, deletePolygonMarker },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarkerContainer);
