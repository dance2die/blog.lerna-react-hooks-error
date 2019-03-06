import React, { Component } from "react";
import "./App.css";

import SharedComponent from "shared";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SharedComponent title={"Shared Component!"} />
      </div>
    );
  }
}

export default App;
