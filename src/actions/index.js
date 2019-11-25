import { getAllMenu } from "../API/MenuComponents";

export const fetchMenuItems = () => async dispatch => {
  const response = await getAllMenu();
  dispatch({ type: "FETCH_MENUITEMS", payload: response.data });
};

export const addOrder = (itemName, itemPrice) => {
  return {
    type: "ADD_ORDER",
    payload: {
      itemName,
      itemPrice,
      count: 1
    }
  };
};
