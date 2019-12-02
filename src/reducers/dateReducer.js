export default (currentDate = "", action) => {
  switch (action.type) {
    case "GET_DATE":
      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();

      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return (currentDate = day + " " + months[month]);
    default:
      return currentDate;
  }
};
