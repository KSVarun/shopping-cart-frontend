import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    console.log("nav");
    console.log(this.props);
    return (
      <div className="ui secondary top attached menu">
        <div className="ui steps">
          <div className="step">Buffet</div>
          <Link to="/" className="step">
            Menu
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
