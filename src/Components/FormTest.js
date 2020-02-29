import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";

import "./FormTest.css";
class FormTest extends React.Component {
  handleSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <Formik
          //   initialValues={{ firstName: "", lastName: "" }}
          initialValues={this.props.data}
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
        <div className="cardTest">""</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let data = { firstName: "", lastName: "" };
  return { data };
}

export default connect(mapStateToProps)(FormTest);
