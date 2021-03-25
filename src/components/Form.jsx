import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class FormikForm extends Component {
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
              name="name"
              className="invalid-feedback"
              render={(msg) => <div className="invalid-feedback">{msg}</div>}
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
              render={(msg) => <div className="invalid-feedback">{msg}</div>}
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
              render={(msg) => <div className="invalid-feedback">{msg}</div>}
            />
          </div>
          <button
            type="submit"
            className="form-button"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default FormikForm;
