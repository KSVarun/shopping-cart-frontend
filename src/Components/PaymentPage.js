import React from "react";
import { connect } from "react-redux";
import { updatePath } from "../actions";

// function PaymentPage() {
//   return <div>Payment method will be added soon</div>;
// }

class PaymentPage extends React.Component {
  componentDidMount() {
    this.props.updatePath(this.props.match.url);
  }
  render() {
    return (
      <div className="emptyPage">
        <h3>Payment method will be added soon</h3>
      </div>
    );
  }
}

export default connect(null, { updatePath })(PaymentPage);
