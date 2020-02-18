import React from "react";
import { connect } from "react-redux";
import {
  fetchMenuItems,
  addOrder,
  getCurrentDate,
  removeOrder,
  updatePath
} from "../actions";

import { Link } from "react-router-dom";

class MenuList extends React.Component {
  componentDidMount() {
    let length = Object.keys(this.props.menuItems.data).length;
    if (length === 0) {
      this.props.fetchMenuItems();
      this.props.getCurrentDate();
    }
    this.props.updatePath(this.props.match.url);
  }

  renderMenuItem = menu => {
    const orderCount = this.props.order.orderedItems[menu.id] || 0;

    return (
      <div key={menu.id} className="card">
        <div className="content">
          <div className="header">
            {menu.itemName.toUpperCase()}
            <div className="floating ui grey label"> {orderCount} </div>
          </div>
          <div className="description">Price: {menu.price}</div>
        </div>

        <div className="two ui buttons">
          <button
            className="ui left attached button"
            onClick={() => this.props.addOrder(menu.id, menu.price)}
          >
            Add
          </button>
          <button
            className="right attached ui button"
            onClick={() => this.props.removeOrder(menu.id, menu.price)}
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
    if (this.props.menuItems.loading) {
      return "Loading...";
    } else {
      return (
        <div className="section">
          {this.renderHeader()}
          <div className="ui cards">
            {this.props.menuItems.data.map(menuItem =>
              this.renderMenuItem(menuItem)
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
  getCurrentDate,
  updatePath
})(MenuList);
