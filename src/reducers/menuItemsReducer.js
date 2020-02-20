import { actionTypes } from "../actions";

const INITIAL_STATE = {
  loading: true,
  data: {},
  itemById: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_MENUT_ITEMS:
      return { ...state, loading: true };
    case actionTypes.FETCHED_MENUITEMS: {
      const itemById = {};
      action.payload.forEach(item => {
        itemById[item.id] = item;
      });

      return {
        ...state,
        data: action.payload,
        loading: false,
        itemById
      };
    }

    default:
      return state;
  }
};
