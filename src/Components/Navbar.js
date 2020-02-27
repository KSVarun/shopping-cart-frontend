import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  handleCartStep = () => {
    let cartLength = Object.keys(this.props.orderedItems).length;
    let activeStepMenu = "step";
    let activeStepCart = "step";
    if (this.props.location.pathname === "/") {
      activeStepMenu = "active step";
    } else if (this.props.location.pathname === "/checkOut") {
      activeStepCart = "active step";
    }
    if (cartLength) {
      return (
        <div className="ui secondary top attached menu">
          <div className="ui steps">
            <Link to="/" className={activeStepMenu}>
              <span className="title">Menu</span>
            </Link>
            <Link to="/checkOut" className={activeStepCart}>
              <span className="title">Cart</span>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui secondary top attached menu">
          <div className="ui steps">
            <Link to="/" className={activeStepMenu}>
              <span className="title">Menu</span>
            </Link>
          </div>
        </div>
      );
    }
  };
  render() {
    return this.handleCartStep();
  }
}

const mapStateToProps = state => {
  return {
    orderedItems: state.order.orderedItems
  };
};

export default connect(mapStateToProps, {})(withRouter(Navbar));
