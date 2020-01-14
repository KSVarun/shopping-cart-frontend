import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder, removeOrder } from "../actions";

class ChekOutPage extends React.Component {
  renderEmptyCart = () => {
    return (
      <div>
        <h3>It's empty here</h3>
        <Link to="/">
          <div className="ui vertical animated right floated button">
            <div className="hidden content">Menu</div>
            <div className="visible content">
              <i className="shop icon" />
            </div>
          </div>
        </Link>
      </div>
    );
  };
  renderMenuItem(menu) {
    debugger;
    let count = this.props.order.orderedItems[menu.id];

    if (count) {
      return (
        <tr key={menu.id}>
          <td>
            <h3>{menu.itemName.toUpperCase()}</h3>
          </td>
          <td>
            <h3>
              {menu.price} * {this.props.order.orderedItems[menu.id]}=
              {this.props.order.price[menu.id]}
            </h3>
          </td>
          <td>
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
          </td>
        </tr>
      );
    }
  }
  render() {
    var totalPrice = this.props.order.totalPrice;
    var content = this.props.menuItems.content;

    if (content === undefined || totalPrice === 0) {
      return <div>{this.renderEmptyCart()}</div>;
    } else {
      return (
        <div className="ui container" style={{ marginTop: "10px" }}>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {content.map(this.renderMenuItem)}
              <tr>
                <td>
                  <h3>TOTAL</h3>
                </td>

                <td>
                  <h3>{totalPrice}</h3>
                </td>
                <td>
                  <button className="ui primary button">Confirm Payment</button>
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/">
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
}

const mapStateToProps = state => {
  console.log(state);
  return { menuItems: state.menuItems, order: state.order };
};

export default connect(mapStateToProps, { addOrder, removeOrder })(ChekOutPage);
