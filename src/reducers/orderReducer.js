import produce from "immer";

const INITIAL_STATE = {
  orderedItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {},
  checkOut: localStorage.getItem("checkoutPageStatus")
    ? JSON.parse(localStorage.getItem("checkoutPageStatus"))
    : 0,
  price: localStorage.getItem("price")
    ? JSON.parse(localStorage.getItem("price"))
    : {},
  totalPrice: localStorage.getItem("totalPrice")
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0
};
export default function orderReducer(state = INITIAL_STATE, action) {
  //state is required to be passed as prop to produce call back
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_ORDER": {
        const id = action.payload.id;
        //Initialize to zero 0
        if (!draft.orderedItems[id]) {
          draft.orderedItems[id] = 0;
          draft.price[id] = 0;
        }
        draft.orderedItems[id]++;
        draft.checkOut = 1;
        draft.price[id] += parseInt(action.payload.itemPrice);
        draft.totalPrice += parseInt(action.payload.itemPrice);
        break;
      }
      case "REMOVE_ORDER": {
        const id = action.payload.id;

        if (draft.orderedItems[id] > 0) {
          draft.orderedItems[id]--;
          draft.price[id] -= parseInt(action.payload.itemPrice);
          draft.totalPrice -= parseInt(action.payload.itemPrice);
        }
        if (draft.orderedItems[id] === 0) {
          delete draft.orderedItems[id];
          delete draft.price[id];
        }
        //get the length of the orderedItems object
        var len = Object.keys(draft.orderedItems).length;
        if (len === 0) {
          draft.checkOut = 0;
        }
        break;
      }
      case "UPDATE_LOCALSTORAGE": {
        localStorage.setItem("cartItems", JSON.stringify(draft.orderedItems));
        localStorage.setItem(
          "checkoutPageStatus",
          JSON.stringify(draft.checkOut)
        );
        localStorage.setItem("price", JSON.stringify(draft.price));
        localStorage.setItem("totalPrice", JSON.stringify(draft.totalPrice));
        break;
      }
      default:
        break;
    }
  });
}

// var ind = state
//   .map(order => {
//     return order.itemName;
//   })
//   .indexOf(action.payload.itemName);
