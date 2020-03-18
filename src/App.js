import React, { Component } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
 
class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
