import { combineReducers } from "redux";

import menuItems from "./menuItems";
import addOrder from "./addOrder";

export default combineReducers({
  menuItems: menuItems,
  addOrder: addOrder
});
