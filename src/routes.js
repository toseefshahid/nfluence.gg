import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Brands from "./components/Brands";
import Streamers from "./components/Streamers";
import About from "./components/About";
import history from "./History/history";
import LoadingOverlay from "react-loading-overlay";


const RedirectToLandingPage = () => {
  return <Redirect to="/" />;
};
 export default class routes extends Component {
                  constructor() {
                    super();
                    this.state = {
                      user: null,
                      loading: false,
                      loadingText: "Loading...",
                      signUpWithTwitchButtonClicked: false
                    };
                  }
                  showLoading(message) {
                    // call back received to display loader

                    this.setState({
                      loadingText: message,
                      loading: true
                    });
                  }
                  onLoginSuccess(user) {
                    setTimeout(() => {
                      this.setState({
                        user: user,
                        loading: false
                      });
                    }, 1000);
                  }

                  signUpWithTwitchButtonClicked() {
                    this.setState({
                      signUpWithTwitchButtonClicked: true
                    });
                  }

                  signUpModalDidClose() {
                    this.setState({
                      signUpWithTwitchButtonClicked: false
                    });
                  }

                  render() {
                    return (
                      <div>
                        <Header
                          onLoginSuccess={user => this.onLoginSuccess(user)}
                          showLoading={message => this.showLoading(message)}
                          onSignUpClicked={() =>
                            this.signUpWithTwitchButtonClicked()
                          }
                        />
                        {this.state.loading ? (
                          <LoadingOverlay
                            active={this.state.loading}
                            spinner
                            text={this.state.loadingText}
                          ></LoadingOverlay>
                        ) : (
                          ""
                        )}
                        <Switch>
                          <Route
                            exact
                            path="/"
                            render={props => (
                              <HomePage
                                {...props}
                                loggedInUser={this.state.user}
                                onLoginSuccess={user =>
                                  this.onLoginSuccess(user)
                                }
                                showLoading={message =>
                                  this.showLoading(message)
                                }
                                onSignUpWithTwitchButtonClicked={
                                  this.state.signUpWithTwitchButtonClicked
                                }
                                onSignUpWithTwitchModalClose={() =>
                                  this.signUpModalDidClose()
                                }
                              />
                            )}
                          />
                          {/* <Route path="/brands" component={Brands} /> */}

                          <Route
                            exact
                            path="/brands"
                            render={props => (
                              <Brands
                                {...props}
                                onSignUpWithTwitchButtonClicked={
                                  this.state.signUpWithTwitchButtonClicked
                                }
                                onSignUpWithTwitchModalClose={() =>
                                  this.signUpModalDidClose()
                                }
                              />
                            )}
                          />

                          {/* <Route path="/streamers" component={Streamers} /> */}

                          <Route
                            exact
                            path="/streamers"
                            render={props => (
                              <Streamers
                                {...props}
                                onSignUpWithTwitchButtonClicked={
                                  this.state.signUpWithTwitchButtonClicked
                                }
                                onSignUpWithTwitchModalClose={() =>
                                  this.signUpModalDidClose()
                                }
                              />
                            )}
                          />

                          {/* <Route path="/about" component={About} /> */}

                          <Route
                            exact
                            path="/about"
                            render={props => (
                              <About
                                {...props}
                                onSignUpWithTwitchButtonClicked={
                                  this.state.signUpWithTwitchButtonClicked
                                }
                                onSignUpWithTwitchModalClose={() =>
                                  this.signUpModalDidClose()
                                }
                              />
                            )}
                          />
                          <Route component={RedirectToLandingPage} />
                        </Switch>
                      </div>
                    );
                  }
                }
 
 
