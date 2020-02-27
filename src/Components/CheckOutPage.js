import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder, removeOrder } from "../actions";

class ChekOutPage extends React.Component {
  renderEmptyCart = () => {
    return (
      <div className="emptyPage">
        <h3>It's empty here, select few items from menu</h3>
      </div>
    );
  };
  renderOrderedItem(orderedItem) {
    return (
      <tr key={orderedItem.id}>
        <td>
          <h3>{orderedItem.name.toUpperCase()}</h3>
        </td>
        <td>
          <h3>
            {orderedItem.price} * {orderedItem.count}=
            {this.props.order.price[orderedItem.id]}
          </h3>
        </td>
        <td>
          <div className="ui buttons">
            <button
              className="ui button"
              onClick={() =>
                this.props.addOrder(
                  orderedItem.id,
                  orderedItem.price,
                  orderedItem.name
                )
              }
            >
              Add
            </button>
            <button
              className="ui button"
              onClick={() =>
                this.props.removeOrder(
                  orderedItem.id,
                  orderedItem.price,
                  orderedItem.name
                )
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
    // console.log(this.props);
    var totalPrice = this.props.order.totalPrice;

    if (totalPrice === 0) {
      return this.renderEmptyCart();
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
          {/* <button onClick={() => this.props.history.push("/")}>
            Go to Menu
          </button> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { menuItems: state.menuItems, order: state.order };
};

export default connect(mapStateToProps, { addOrder, removeOrder })(ChekOutPage);
