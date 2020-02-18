// import { getAllMenu } from "../API/MenuComponents";

export const actionTypes = {
  FETCHING_MENUT_ITEMS: "FETCHING_MENUT_ITEMS",
  FETCHED_MENUITEMS: "FETCHED_MENUITEMS"
};

var response = [
  {
    id: "1",
    itemName: "idli",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:00",
    price: "20"
  },
  {
    id: "2",
    itemName: "vada",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:01",
    price: "15"
  },
  {
    id: "3",
    itemName: "rava idli",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:02",
    price: "35"
  },
  {
    id: "4",
    itemName: "set dosa",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:03",
    price: "30"
  },
  {
    id: "5",
    itemName: "ghee dosa",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:04",
    price: "40"
  },
  {
    id: "6",
    itemName: "masala jeera dosa",
    startTimeMorning: "7:00",
    endTimeMorning: "11:00",
    startTimeEvening: "17:00",
    endTimeEvening: "22:04",
    price: "40"
  }
];

export const fetchMenuItems = () => async dispatch => {
  dispatch({ type: actionTypes.FETCHING_MENUT_ITEMS });
  // const response = await getAllMenu();
  dispatch({ type: actionTypes.FETCHED_MENUITEMS, payload: response });
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

export const updatePath = path => {
  return {
    type: "GET_PATH",
    payload: path
  };
};
