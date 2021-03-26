/*eslint-disable no-unused-vars*/
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import DrawTool from "../components/DrawTool";
import L from "leaflet";

class DrawToolContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  activateMapClick() {
    this.mapClick = this.props.map.map.on("click", (e) => {
      console.log(e);
    });
  }
  clearDrawTool() {
    // remove click event
  }
  render() {
    let p = {
      ...this.props,
      activateMapClick: this.activateMapClick.bind(this),
      clearDrawTool: this.clearDrawTool.bind(this),
    };
    return <DrawTool {...p} />;
  }
}

const mapStateToProps = (state) => {
  return { map: state.Map };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawToolContainer);
