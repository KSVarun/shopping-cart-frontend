import produce from "immer";

const INITIAL_STATE = {
  orderedItems: {},
  checkOut: 0,
  price: {},
  totalPrice: 0
};
export default function orderReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_ORDER": {
        const id = action.payload.id;
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

        if (draft.orderedItems[id] !== 0) {
          draft.orderedItems[id]--;
          draft.price[id] -= parseInt(action.payload.itemPrice);
          draft.totalPrice -= parseInt(action.payload.itemPrice);
        }
        if (draft.orderedItems[id] === 0) {
          delete draft.orderedItems[id];
          delete draft.price[id];
          draft.checkOut = 0;
        }
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
