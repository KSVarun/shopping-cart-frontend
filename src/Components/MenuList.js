import React from "react";
import { connect } from "react-redux";
import {
  fetchMenuItems,
  addOrder,
  getCurrentDate,
  removeOrder
} from "../actions";

import { Link } from "react-router-dom";

import "./MenuList.css";
class MenuList extends React.Component {
  componentDidMount() {
    let length = Object.keys(this.props.menuItems.itemById).length;
    if (length === 0) {
      this.props.fetchMenuItems();
      this.props.getCurrentDate();
    }
  }

  renderMenuItem = menu => {
    const orderCount = this.props.order.orderedItems[menu.id]
      ? this.props.order.orderedItems[menu.id].count
      : 0;

    return (
      <div key={menu.id} className="card">
        <div className="content">
          <div className="test">
            <button>Add</button>
            <button>Remove</button>
          </div>
          <div className="header">
            {menu.itemName.toUpperCase()}
            <div className="floating ui grey label"> {orderCount} </div>
          </div>
          <div className="description">Price: {menu.price}</div>
        </div>

        <div className="two ui buttons">
          <button
            className="ui left attached button "
            onClick={() =>
              this.props.addOrder(menu.id, menu.price, menu.itemName)
            }
          >
            Add
          </button>
          <button
            className="ui right attached button"
            onClick={() =>
              this.props.removeOrder(menu.id, menu.price, menu.itemName)
            }
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
  renderCheckoutHelper = () => {
    // to find size Object.keys(this.props.order.orderedItems).length
    if (this.props.order.checkOut === 1) {
      return (
        <Link to="/checkOut">
          <div className="ui vertical animated right floated button" disabled>
            <div className="hidden content">Cart</div>
            <div className="visible content">
              <i className="shop icon" />
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <div className="ui icon message">
          <i className="inbox icon" />
          <div className="content">
            <div className="header">Choose item of your chioce</div>
          </div>
        </div>
      );
    }
  };

  renderHeader = () => {
    return (
      <div className="ui secondary pointing menu">
        <div className="active item">Lunch</div>
        <div className="right menu">
          <div className="item">
            <i className="calendar alternate outline icon" />
            {this.props.date}
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props.menuItems);
    if (this.props.menuItems.loading) {
      return "Loading...";
    } else {
      return (
        <div className="section">
          {this.renderHeader()}
          <div className="ui cards">
            {Object.keys(this.props.menuItems.itemById).map(menuItemKey =>
              this.renderMenuItem(this.props.menuItems.itemById[menuItemKey])
            )}
          </div>
          {this.renderCheckoutHelper()}
          <div />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { menuItems: state.menuItems, date: state.date, order: state.order };
};

export default connect(mapStateToProps, {
  fetchMenuItems,
  addOrder,
  removeOrder,
  getCurrentDate
})(MenuList);
