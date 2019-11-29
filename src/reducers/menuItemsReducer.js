export default (state = [], action) => {
  //console.log(action.payload);
  switch (action.type) {
    case "FETCH_MENUITEMS":
      return action.payload;
    default:
      return state;
  }
};
