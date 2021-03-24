import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../components/Form";
import { saveLocation } from "../actions/locationActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation }, dispatch);
  return {
    saveLocation: (location) => {
      dispatch({
        type: "SAVE_LOCATION",
        data: location,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
