import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder, removeOrder, updatePath } from "../actions";

class ChekOutPage extends React.Component {
  componentDidMount() {
    this.props.updatePath(this.props.match.url);
  }
  renderEmptyCart = () => {
    return (
      <div className="emptyPage">
        <h3>It's empty here, select few items from menu</h3>
      </div>
    );
  };
  renderOrderedItem(menuItem, count) {
    return (
      <tr key={menuItem.id}>
        <td>
          <h3>{menuItem.itemName.toUpperCase()}</h3>
        </td>
        <td>
          <h3>
            {menuItem.price} * {count}={this.props.order.price[menuItem.id]}
          </h3>
        </td>
        <td>
          <div className="ui buttons">
            <button
              className="ui button"
              onClick={() => this.props.addOrder(menuItem.id, menuItem.price)}
            >
              Add
            </button>
            <button
              className="ui button"
              onClick={() =>
                this.props.removeOrder(menuItem.id, menuItem.price)
              }
            >
              Remove
            </button>
          </div>
        </td>
      </tr>
    );
  }
  render() {
    var totalPrice = this.props.order.totalPrice;
    var content = this.props.menuItems.loading;

    if (content || totalPrice === 0) {
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
              {Object.keys(this.props.order.orderedItems).map(orderedItemId => {
                return this.renderOrderedItem(
                  this.props.menuItems.itemById[orderedItemId],
                  this.props.order.orderedItems[orderedItemId]
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>
                  <h3>TOTAL</h3>
                </th>
                <th>
                  <h3>{totalPrice}</h3>
                </th>
                <th>
                  <Link to="/payment" className="ui primary button">
                    Confirm Payment
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { menuItems: state.menuItems, order: state.order };
};

export default connect(mapStateToProps, { addOrder, removeOrder, updatePath })(
  ChekOutPage
);
