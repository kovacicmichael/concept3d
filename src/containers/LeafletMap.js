import React, { Component } from "react";
import { connect } from "react-redux";
import { MapContainer, TileLayer, ZoomControl, Polygon } from "react-leaflet";
import { bindActionCreators } from "redux";
import { fetchAllPolygons, setMap } from "../actions/mapActions";
import AllMarkers from "./AllMarkers";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  convertMarkersToPolygonCords() {
    return this.props.map.polygonMarkers.map((m) => [m.lat, m.lng]);
  }

  render() {
    const purpleOptions = { color: "red" };

    return (
      <div className="map-container">
        <MapContainer
          className="map"
          zoomControl={false}
          center={this.props.map.centerPoint}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
          whenCreated={(map) => {
            this.props.setMap(map);
          }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl position="bottomright" />
          <AllMarkers />
          {this.props.map.polygonMarkers.length > 1 && (
            <Polygon
              pathOptions={purpleOptions}
              positions={this.convertMarkersToPolygonCords()}
            />
          )}
        </MapContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    map: state.Map,
    error: state.Error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllPolygons, setMap }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
