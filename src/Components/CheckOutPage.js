import React from "react";
import { Link } from "react-router-dom";

class ChekOutPage extends React.Component {
  state = { orders: [] };
  render() {
    return (
      <React.Fragment>
        <div>ChekOutPage</div>
        <Link to="/menuList" className="ui primary button">
          Menu
        </Link>
      </React.Fragment>
    );
  }
}

export default ChekOutPage;
