import React from "react";
import { Formik, Form, Field } from "formik";

class FormTest extends React.Component {
  handleSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={this.handleSubmit}
      >
        {() => (
          <Form className="ui form">
            <div>
              <label>First Name</label>
              <Field name="firstName" type="text"></Field>
            </div>
            <div>
              <label>Last Name</label>
              <Field name="lastName" type="text"></Field>
            </div>
            <div>
              <button className="ui button">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormTest;
