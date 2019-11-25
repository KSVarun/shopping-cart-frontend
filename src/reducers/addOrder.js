export default (orders = [], action) => {
  switch (action.type) {
    case "ADD_ORDER":
      // debugger;
      //   orders.map(order => console.log(order.itemName));

      if (orders.length === 0) {
        return [...orders, action.payload];
      } else if (
        orders.map(order => order.itemName === action.payload.itemName)
      ) {
        debugger;
        // var ind = orders
        //   .map(order => {
        //     return order.itemName;
        //   })
        //   .indexOf(action.payload.itemName);
        var ind = orders.findIndex(
          order => order.itemName === action.payload.itemName
        );
        var prevCount = orders[ind].count;
        var updateCount = prevCount + 1;
        var prevPrice = orders[ind].itemPrice;
        var updatePrice = updateCount * prevPrice;
        // const updateOrder = {
        //   itemName: action.payload.itemName,
        //   itemPrice: updatePrice,
        //   count: updateCount
        // };
        return { ...orders, itemPrice: updatePrice, count: updateCount };
      } else if (orders.itemName !== action.payload.itemName) {
        return [...orders, action.payload];
      }
    default:
      return orders;
  }
};
