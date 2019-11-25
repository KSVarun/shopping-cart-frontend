import React from "react";
import MenuPage from "./MenuPage";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <MenuPage />
      </div>
    );
  }
}

export default App;
