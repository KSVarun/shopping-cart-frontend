import produce from "immer";

const INITIAL_STATE = {
  orderedItems: {}
};
export default function orderReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_ORDER": {
        const id = action.payload.id;
        if (!draft.orderedItems[id]) {
          draft.orderedItems[id] = 0;
        }
        draft.orderedItems[id]++;

        break;
      }
      case "REMOVE_ORDER": {
        const id = action.payload.id;

        draft.orderedItems[id]--;
        if (draft.orderedItems[id] === 0) {
          delete draft.orderedItems[id];
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
