import React from "react";
import MenuList from "./MenuList";

class MenuPage extends React.Component {
  state = { date: "" };

  componentDidMount = () => {
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
      "Nov",
      "Dec"
    ];
    // console.log(day, months[month]);
    var currentDate = day + " " + months[month];
    this.setState({ date: currentDate });
  };

  render() {
    return (
      <div>
        <div className="ui secondary top attached menu">
          <div className="item">
            <b>Buffet</b>
          </div>

          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <i className="search link icon" />
                <input type="text" placeholder="Search Item" />
              </div>
              <div className="right item">
                <i className="map marker icon" />
                Embassy Golf Links
              </div>
            </div>
          </div>
        </div>

        <div className="ui secondary pointing menu">
          <div className="active item">Lunch</div>
          <div className="right menu">
            <div className="item">
              <i className="calendar alternate outline icon" />
              {this.state.date}
            </div>
            <button className="ui icon item">
              Sort
              <i className="filter icon" />
            </button>
          </div>
        </div>

        <div className="section">
          <MenuList />
        </div>
      </div>
    );
  }
}

export default MenuPage;
