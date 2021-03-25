import React, { PureComponent } from "react";
import MapMarker from "../containers/Marker";

class AllMarkers extends PureComponent {
  render() {
    const { locations } = this.props;
    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          marker={marker}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
        />
      );
    });

    return <div className="paths-container">{markerArray}</div>;
  }
}

export default AllMarkers;
