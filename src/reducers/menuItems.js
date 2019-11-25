export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MENUITEMS":
      return [...state, action.payload];
    default:
      return state;
  }
};
