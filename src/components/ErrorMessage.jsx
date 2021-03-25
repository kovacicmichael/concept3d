import React, { PureComponent } from "react";
import "../style/ErrorMessage.css";

class ErrorMessage extends PureComponent {
  render() {
    return (
      <div className="error-container">
        <div className="error-info-container">
          <div className="error-info">
            <div className="error-message">{this.props.errorMessage}</div>
            <button
              className="error-button"
              onClick={this.props.confirmReceipt}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
