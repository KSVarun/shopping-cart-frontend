import { combineReducers } from "redux";

import menuItems from "./menuItemsReducer";
import order from "./orderReducer";
import date from "./dateReducer";

export default combineReducers({
  menuItems,
  order,
  date
});
