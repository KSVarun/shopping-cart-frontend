import { getAllMenu } from "../API/MenuComponents";

export const actionTypes = {
  FETCHING_MENUT_ITEMS: "FETCHING_MENUT_ITEMS",
  FETCHED_MENUITEMS: "FETCHED_MENUITEMS"
};

export const fetchMenuItems = () => async dispatch => {
  dispatch({ type: actionTypes.FETCHING_MENUT_ITEMS });
  const response = await getAllMenu();
  dispatch({ type: actionTypes.FETCHED_MENUITEMS, payload: response.data });
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
