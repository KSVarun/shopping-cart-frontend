import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder, removeOrder } from "../actions";

class ChekOutPage extends React.Component {
  renderHelper = menu => {
    let count = this.props.order.orderedItems[menu.id];

    if (count) {
      return (
        <div
          className="container"
          style={{ marginTop: "30px", marginRight: "50px", marginLeft: "50px" }}
          key={menu.id}
        >
          <div className="ui relaxed divided list">
            <div className="item">
              <div className="content">
                <div className="description">
                  <h2>{menu.itemName}</h2>
                  <p>
                    {menu.price} * {this.props.order.orderedItems[menu.id]}=
                    {this.props.order.price[menu.id]}
                  </p>
                </div>
                <div className="ui buttons">
                  <button
                    className="ui button"
                    onClick={() => this.props.addOrder(menu.id, menu.price)}
                  >
                    Add
                  </button>
                  <button
                    className="ui button"
                    onClick={() => this.props.removeOrder(menu.id, menu.price)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        {this.props.menuItems.map(menuItem => this.renderHelper(menuItem))}
        {this.props.order.totalPrice}
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
  return { menuItems: state.menuItems, order: state.order };
};

export default connect(
  mapStateToProps,
  { addOrder, removeOrder }
)(ChekOutPage);
