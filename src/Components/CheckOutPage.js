import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ChekOutPage extends React.Component {
  render() {
    return (
      <div>
        ChekOutPage
        <Link to="/" disabled>
          <div className="ui vertical animated right floated button">
            <div className="hidden content">Menu</div>
            <div className="visible content">
              <i className="shop icon" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return state;
};

export default connect(mapStateToProps)(ChekOutPage);
