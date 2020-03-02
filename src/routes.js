import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Brands from "./components/Brands";
import Streamers from "./components/Streamers";
import About from "./components/About";

const RedirectToLandingPage = () => {
  return <Redirect to="/nfluence.gg" />;
};
 export default class routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/nfluence.gg" component={HomePage} />
          <Route path="/nfluence.gg/brands" component={Brands} />
          <Route path="/nfluence.gg/streamers" component={Streamers} />
          <Route path="/nfluence.gg/about" component={About} />
          <Route component={RedirectToLandingPage} />
        </Switch>
      </React.Fragment>
    );
  }
}
 
 
