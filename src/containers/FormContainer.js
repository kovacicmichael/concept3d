import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../components/Form";
import "../style/Form.css";
import { saveLocation } from "../actions/locationActions";
import { setMapCenter } from "../actions/mapActions";
import { setErrorMessage } from "../actions/errorActions";
import { withFormik } from "formik";

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      name: "",
      lat: "",
      lng: "",
    };
  },
  validate(v) {
    const errors = {};

    if (!v.name) {
      errors.name = "Name is required.";
    }
    if (v.lat === "" || v.lat > 90 || v.lat < -90) {
      errors.lat = "Enter a value between -90 and 90.";
    }
    if (v.lng === "" || v.lng > 180 || v.lng < -180) {
      errors.lng = "Enter a value between -180 and 180.";
    }

    return errors;
  },
  async handleSubmit(values, { props, setSubmitting, resetForm }) {
    const { saveLocation, setMapCenter, setErrorMessage } = props;
    let d = {
      name: values.name,
      lat: values.lat,
      lng: values.lng,
    };

    try {
      await saveLocation(d);
      setMapCenter([values.lat, values.lng]);
      setSubmitting(false);
      resetForm();
    } catch (e) {
      console.error(e);
      setErrorMessage("From submit error: " + e.message);
    }
  },
})(Form);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { saveLocation, setMapCenter, setErrorMessage },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(FormikForm);
