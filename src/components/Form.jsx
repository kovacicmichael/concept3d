import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class FormikForm extends Component {
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }

  render() {
    const {
      errors,
      touched,
      handleSubmit,
      isSubmitting,
      values,
      setFieldValue,
      setFieldTouched,
    } = this.props;

    return (
      <div className="form-container">
        <h2 className="form-header">Location Selector</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Field
              type="name"
              name="name"
              placeholder="Enter a name"
              autoComplete="off"
              value={values.name}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <Field
              type="number"
              name="lat"
              placeholder="Enter a latitude"
              autoComplete="off"
              value={values.lat}
              className={`form-control ${errors.lat ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              component="div"
              name="lat"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <Field
              type="number"
              name="lon"
              placeholder="Enter a longitude"
              autoComplete="off"
              values={values.lon}
              className={`form-control ${errors.lon ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              component="div"
              name="lon"
              className="invalid-feedback"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

// const { handleSubmit } = this.props;

//     return (
//       <form className="form" onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             ref={(input) => {
//               this.name = input;
//             }}
//             type="text"
//             name="name"
//           />
//         </label>
//         <label>
//           Lat
//           <input
//             ref={(input) => {
//               this.lat = input;
//             }}
//             type="text"
//             name="lat"
//           />
//         </label>
//         <label>
//           Lon
//           <input
//             ref={(input) => {
//               this.lng = input;
//             }}
//             type="text"
//             name="lon"
//           />
//         </label>
//         <button type="submit">Save</button>
//       </form>
//     );

export default FormikForm;
