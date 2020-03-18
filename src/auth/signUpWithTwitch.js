import React, { Component } from 'react'
import TwitchIcon from "../images/twitchIcon.png";
import WebApiConfig from "../webapi/webapi-config";
import SocialMediaSignUpAPI from "../webapi/socialmedia-Signup-api";
import { withRouter } from "react-router-dom";
import history from "../History/history";


class signUpWithTwitch extends Component {
                constructor() {
                super();

                this.socialMediaAPI = new SocialMediaSignUpAPI();
                }
                componentDidMount() {
                if (
                    this.props &&
                    this.props.location &&
                    this.props.location.hash &&
                    this.props.location.hash.includes("access_token")
                ) {
                    // checking if page loaded and twitch auth succeeded receiving data in hash
                    this.props.onStartAuth(
                    "Authorized Successfully. Logging in ..."
                    ); // callback to display loader text
                    let accessToken = this.getHashValue("access_token"); // getting access token from twitch auth hash

                    let twitchAccessObject = {};
                    twitchAccessObject.access_token = accessToken;
                    // api call to server for receiving user information

                    this.socialMediaAPI
                    .loginWithTwitch(twitchAccessObject)
                    .then(user => {
                        if (user.token) {
                        localStorage.setItem(
                            "twitchUser",
                            JSON.stringify(user)
                        ); // saving twitch User object in local storage
                        this.props.onLoginSuccess(user); // call back to notify user is logged in successfully
                        history.push("/"); // redirecting to dashboard after login completed
                        }
                    },
                    error => {
                    }
                    ); // error handling not done here if our login API failed
                    //   let params = this.props.location.hash; //response received   #access_token=120ywppmphsumnpzevy67xntvow3y3&scope=&token_type=bearer
                } else if (
                    this.props &&
                    this.props.location &&
                    this.props.location.search
                ) {
                    // checking if page loaded and twitch auth failed due to some error
                    let errorDescription = this.getParameterByName(
                    "error_description"
                    );
                    console.log("Auth Error: " + errorDescription);
                }
                }

                // helper methods

                getHashValue(key) {
                // method to get value using key from location.hash
                var matches = this.props.location.hash.match(
                    new RegExp(key + "=([^&]*)")
                );
                return matches ? matches[1] : null;
                }

                getParameterByName(name) {
                // method to get value using key from location.search
                let url = window.location.href;
                name = name.replace(/[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return "";
                return decodeURIComponent(results[2].replace(/\+/g, " "));
                }

                signInWithTwitch() {
                this.props.onStartAuth("Redirecting..."); // call back to display loader
                const url = `${WebApiConfig.TwitchAuthURL}?client_id=${WebApiConfig.TwitchClientID}&redirect_uri=${WebApiConfig.LocalhostRedirectURL}&response_type=token&scope=user:read:email`;
                window.location.replace(url); // calling twitch auth url
                }

                render() {
                return (
                    <div className="actionButton signUpLink">
                    <button
                        class="btn btn-primary signUpTwitch"
                        onClick={() => this.signInWithTwitch()}
                    >
                        {" "}
                        <img src={TwitchIcon} />
                        <span> Sign up with Twitch </span>
                    </button>
                    </div>
                );
                }
            }
export default withRouter(signUpWithTwitch);
 
