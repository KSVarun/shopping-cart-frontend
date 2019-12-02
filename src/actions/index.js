import { getAllMenu } from "../API/MenuComponents";

export const fetchMenuItems = () => async dispatch => {
  const response = await getAllMenu();
  dispatch({ type: "FETCH_MENUITEMS", payload: response.data });
};

export const addOrder = (id, itemPrice) => {
  return {
    type: "ADD_ORDER",
    payload: {
      id,
      itemPrice
    }
  };
};

export const removeOrder = (id, itemPrice) => {
  return {
    type: "REMOVE_ORDER",
    payload: {
      id,
      itemPrice
    }
  };
};

export const getCurrentDate = () => {
  return {
    type: "GET_DATE"
  };
};
