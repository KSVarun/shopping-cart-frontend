import React from "react";
import MenuList from "./MenuList";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ChekOutPage from "./CheckOutPage";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <Router>
          <Navbar />
          <Route path="/" exact component={MenuList} />
          <Route path="/checkOut" component={ChekOutPage} />
        </Router>
      </div>
    );
  }
}

export default App;
