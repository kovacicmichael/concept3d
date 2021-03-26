/*eslint-disable no-unused-vars*/
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Marker from "../components/Marker";
import { bindActionCreators } from "redux";
import { savePolygonMarker, deletePolygonMarker } from "../actions/mapActions";
import { setErrorMessage } from "../actions/errorActions";

class MarkerContainer extends PureComponent {
  async handleMarkerClick(marker) {
    try {
      let index = this.props.markers.findIndex((m) => m.id == marker.id);
      if (index < 0) {
        await this.props.savePolygonMarker(marker);
      } else {
        await this.props.deletePolygonMarker(marker, index);
      }
    } catch (e) {
      console.error(e);
      this.props.setErrorMessage("From submit error: " + e.message);
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
    { savePolygonMarker, deletePolygonMarker, setErrorMessage },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarkerContainer);
