import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../components/Form";
import "../style/Form.css";
import { saveLocation } from "../actions/locationActions";
import { withFormik } from "formik";

const FormikForm = withFormik({
  mapPropsToValues: (props) => {
    var p = props;
    return {
      name: "",
      lat: "",
      lon: "",
    };
  },
  validate(v) {
    const errors = {};

    if (!v.name) {
      errors.name = "Name is required.";
    }
    if (!v.lat || v.lat > 90 || v.lat < -90) {
      errors.lat = "Enter a value between -90 and 90.";
    }
    if (!v.lon || v.lon > 180 || v.lon < -180) {
      errors.lon = "Enter a value between -180 and 180.";
    }

    return errors;
  },
  handleSubmit(values, { props, setSubmitting }) {
    const { saveLocation } = props;
    let d = {
      name: values.name,
      lat: values.lat,
      lng: values.lon,
    };
    saveLocation(d).then(() => setSubmitting(false));
  },
})(Form);

const mapStateToProps = (state) => {
  return {
    values: {
      name: "",
      lat: 0,
      lon: 0,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps,
)(FormikForm);
