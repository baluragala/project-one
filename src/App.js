import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
