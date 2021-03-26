import React, { PureComponent } from "react";
import "../style/DrawTool.css";

class DrawTool extends PureComponent {
  render() {
    return (
      <div className="draw-container">
        <div className="draw-info-container">
          <div className="draw-info">
            <div className="draw-message" />
            <button
              className="draw-button"
              onClick={this.props.activateMapClick}
            >
              Draw
            </button>
            <button onClick={this.props.clearDrawTool}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawTool;
