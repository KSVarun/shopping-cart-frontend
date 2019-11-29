import React from "react";

class Navbar extends React.Component {
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
      </div>
    );
  }
}

export default Navbar;
