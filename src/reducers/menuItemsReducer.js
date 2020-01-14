export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MENUITEMS":
      return action.payload;
    default:
      return state;
  }
};
