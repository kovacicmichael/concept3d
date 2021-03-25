import React, { Component } from "react";
import { Map, TileLayer, ZoomControl, Polygon } from "react-leaflet";
import AllMarkers from "./AllMarkers";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  convertMarkersToPolygonCords() {
    if (this.props.map.polygonMarkers.length > 1) {
      return this.props.map.polygonMarkers.map((m) => [m.lat, m.lng]);
    }
    return [];
  }

  render() {
    const purpleOptions = { color: "red" };

    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.props.map.centerPoint}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
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
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
