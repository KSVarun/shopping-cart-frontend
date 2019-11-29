import React from "react";
import { connect } from "react-redux";
import {
  fetchMenuItems,
  addOrder,
  getCurrentDate,
  removeOrder
} from "../actions";

import CheckOutPage from "./CheckOutPage";
import { Link } from "react-router-dom";

class MenuList extends React.Component {
  // state = { menus: [], orders: [], menuItems: [] };

  componentDidMount() {
    this.props.fetchMenuItems();
    this.props.getCurrentDate();

    // const response = await getAllMenu();
    // this.setState({ menus: response.data });
    // if (
    //   !this.state.menuItems.includes(
    //     this.state.menus.map(menu => menu.itemName)
    //   )
    // ) {
    //   this.state.menus.map(menu => {
    //     if (menu.itemName) {
    //       this.setState({
    //         menuItems: [...this.state.menuItems, menu.itemName]
    //       });
    //     }
    //     return null;
    //   });
    // }
  }

  // handleOrder = (item_name, item_price) => {
  //   //adding first item

  //   if (this.state.orders.length === 0) {
  //     this.setState({
  //       orders: [
  //         ...this.state.orders,
  //         {
  //           itemName: item_name,
  //           count: 1,
  //           price: item_price
  //         }
  //       ]
  //     });
  //   } //updating order already present
  //   else if (
  //     this.state.orders
  //       .map(order => {
  //         return order.itemName;
  //       })
  //       .includes(item_name)
  //   ) {
  //     //   var ind = this.state.orders
  //     //     .map(order => {
  //     //       return order.itemName;
  //     //     })
  //     //     .indexOf(item_name);
  //     var ind = this.state.orders.findIndex(
  //       order => order.itemName === item_name
  //     );
  //     var prevCount = this.state.orders[ind].count;
  //     var updateCount = prevCount + 1;
  //     var prevPrice = this.state.orders[ind].price;
  //     var updatePrice = updateCount * prevPrice;
  //     const updateOrder = {
  //       itemName: item_name,
  //       count: updateCount,
  //       price: updatePrice
  //     };
  //     this.setState(prevState => {
  //       prevState.orders[ind] = updateOrder;
  //       return {
  //         orders: [...prevState.orders]
  //       };
  //     });
  //   } //adding new order
  //   else if (
  //     !this.state.orders
  //       .map(order => {
  //         return order.itemName;
  //       })
  //       .includes(item_name)
  //   ) {
  //     this.setState({
  //       orders: [
  //         ...this.state.orders,
  //         {
  //           itemName: item_name,
  //           count: 1,
  //           price: item_price
  //         }
  //       ]
  //     });
  //   }
  // };

  // handleRemoveOrder = (item_name, item_price) => {
  //   var val = this.state.orders
  //     .map(order => {
  //       return order.itemName;
  //     })
  //     .includes(item_name);
  //   var orderCount = 0;
  //   var orderPrice = 0;
  //   if (val) {
  //     var ind = this.state.orders.findIndex(
  //       order => order.itemName === item_name
  //     );
  //     orderCount = this.state.orders[ind].count;
  //     orderPrice = this.state.orders[ind].price;

  //     if (orderCount !== 0) {
  //       var updateOrderCount = orderCount - 1;
  //       var updateOrderPrice = orderPrice - item_price;
  //       const updateRemoveOrder = {
  //         itemName: item_name,
  //         count: updateOrderCount,
  //         price: updateOrderPrice
  //       };
  //       this.setState(prevState => {
  //         prevState.orders[ind] = updateRemoveOrder;
  //         return {
  //           orders: [...prevState.orders]
  //         };
  //       });
  //     }
  //   }
  // };

  // componentDidUpdate = () => {
  //   // console.log("orderslist");
  //   // console.log(this.state.orders);
  //   // console.log("menu list= " + this.state.menuItems);
  // };
  renderMenuItem = menu => {
    // var tagValue = 0;
    // if (this.state.orders.length === 0) {
    //   tagValue = 0;
    // }
    // var vl = this.state.orders
    //   .map(order => order.itemName === menu.itemName)
    //   .toString();
    // if (vl) {
    //   var ind = this.state.orders.findIndex(
    //     order => order.itemName === menu.itemName
    //   );
    //   if (ind !== -1) {
    //     tagValue = this.state.orders[ind].count;
    //   }
    // }
    //console.log(vl);
    //menu.map(menuItem => console.log(menuItem));

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
            onClick={() => this.props.removeOrder(menu.id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="section">
        <div className="ui secondary pointing menu">
          <div className="active item">Lunch</div>
          <div className="right menu">
            <div className="item">
              <i className="calendar alternate outline icon" />
              {this.props.date}
            </div>
            <button className="ui icon item">
              Sort
              <i className="filter icon" />
            </button>
          </div>
        </div>
        <div className="ui cards">
          {this.props.menuItems.map(menuItem => this.renderMenuItem(menuItem))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  // console.log(state.menuItems);
  return { menuItems: state.menuItems, date: state.date, order: state.order };
};

export default connect(
  mapStateToProps,
  { fetchMenuItems, addOrder, removeOrder, getCurrentDate }
)(MenuList);
