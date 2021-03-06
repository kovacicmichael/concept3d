import React, { Component } from "react";
import LeafletMap from "../containers/LeafletMap";
import FormContainer from "../containers/FormContainer";
import ErrorMessage from "../containers/ErrorMessage";

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
    this.props.fetchAllPolygons();
  }
  render() {
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap />
        {this.props.error.visible && <ErrorMessage />}
      </div>
    );
  }
}

export default App;
