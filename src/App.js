import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployee from "./components/employees/AddEmployee";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addEmployee" component={AddEmployee} />
      </Router>
    </Provider>
  );
}

export default App;
