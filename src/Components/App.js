import React from "react";
import MenuList from "./MenuList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChekOutPage from "./CheckOutPage";
import Navbar from "./Navbar";
import PaymentPage from "./PaymentPage";
import FormTest from "./FormTest";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/checkOut" component={ChekOutPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/formTest" component={FormTest} />
            <Route path="/" component={MenuList} />
            {/* <Route component={MenuList} /> */}
            {/* <Route>
              <Redirect to="/" component={MenuList} />
            </Route> */}
            {/* <Route path="/" exact render={props => <MenuList {...props} />} /> */}
            {/* <Route
              path="/checkOut"
              exact
              render={props => <ChekOutPage {...props} />}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
