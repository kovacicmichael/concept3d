import { connect } from "react-redux";
import "../style/App.css";
import ErrorMessage from "../components/ErrorMessage";

const mapStateToProps = (state) => {
  return { errorMessage: state.Error.message };
};

const mapDispatchToProps = (dispatch) => {
  return {
    confirmReceipt: () => {
      dispatch({ type: "CLOSE_ERROR_MESSAGE" });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);
