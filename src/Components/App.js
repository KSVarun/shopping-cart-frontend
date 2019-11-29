import React from "react";
import MenuPage from "./MenuPage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ChekOutPage from "./CheckOutPage";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <Router>
          <Route path="/" exact component={MenuPage} />
          <Route path="/checkOut" component={ChekOutPage} />
        </Router>
      </div>
    );
  }
}

export default App;
