import React, { Component } from "react";
import PopupBackground from "../images/popupBack.png";
import $ from "jquery";
import SocialMediaSignUpAPI from "../webapi/socialmedia-Signup-api";
import axios from 'axios';
import firebase from '../firebase';

class CATAudioModalView extends Component {
  constructor() {
    super();

    this.state = {
      twitchEmail: "",
      twitchId: "",
      currentDate: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.socialApi = new SocialMediaSignUpAPI();
    // this.handleLoginKeyUp = this.keyUpHandler.bind(this);
  }

  // component lifecycle methods

  componentDidMount() {
    this.loadJQuery();
  }

  // helper methods
  loadJQuery() {
    $("body").click(function (evt) {
      if (evt.target.id === "myUniqueBarError") return;
      $("#myUniqueBarError").removeClass("show");
    });
    $(".popup-trigger").click();
  }

  // buttons action methods

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
      $(".close").click();
    }
  }
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }

  signUpButtonClicked = async (data) => {
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.twitchEmail,
        twitch_id: this.state.twitchId
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.status == 200) {
          $(".close").click();
          var x = document.getElementById("myUniqueBar");
          x.classList.add("show");
          $("#myUniqueBar").html(
            '  <i class="fa fa-check"></i> ' + 'Subscribe Successful. Thank you' +
            '<i class="fa fa-close"></i>'
          );
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 7000);
        } else if (Result.error.email == "The email must be a valid email address.") {
          $(".msgsForUsers .email-id").fadeIn();
          setTimeout(function () {
            $(".msgsForUsers .email-id").fadeOut();
          }, 5000);
          $(".email-id").removeClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' + "Invalid email address"
          );
        } else if (Result.error.email == "The email field is required.") {
          $(".msgsForUsers .email-id").fadeIn();
          setTimeout(function () {
            $(".msgsForUsers .email-id").fadeOut();
          }, 5000);
          $(".email-id").removeClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' + "Please fill in this field"
          );
        }
        else if (Result.error.email == "The email has already been taken.") {
          $(".msgsForUsers .email-id").fadeIn();
          setTimeout(function () {
            $(".msgsForUsers .email-id").fadeOut();
          }, 5000);
          $(".email-id").removeClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' + "Subscriber with this email already exists."
          );
        }
        else if (Result.error.twitch_id == "The twitch id field is required.") {
          $(".msgsForUsers .twitch-id-error").fadeIn();
          setTimeout(function () {
            $(".msgsForUsers .twitch-id-error").fadeOut();
          }, 5000);
          $(".twitch-id-error").removeClass("alreadyExist");
          $(".msgsForUsers .twitch-id-error").html(
            '<i class="fa fa-warning"></i>' + "Please fill in this field"
          );
        }
      })

  }

  render() {
    var popupBackgroundImage = {
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundPosition: "center",
      backgroundImage: `url(${PopupBackground})`
    };
    return (
      <div className="model-popup">
        <button
          type="button"
          className="btn btn-primary d-none popup-trigger"
          data-toggle="modal"
          data-target="#signUpPopup"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="signUpPopup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signUpPopup"
          aria-hidden="true"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={popupBackgroundImage}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Sign up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => this.closeModal()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div id="newletter">
                  <div className="form">
                    <div className="msgsForUsers ">
                      <div className="field iconEmail">
                        <input
                          className="email"
                          required
                          type="email"
                          autoComplete="off"
                          placeholder="Twitch Email"
                          name="twitchEmail"
                          value={this.state.twitchEmail}
                          onChange={this.handleInputChange}
                          onKeyUp={this.handleLoginKeyUp}
                        />
                        <div class="errorMessages email-id"></div>
                        <i className="fa fa-envelope icon" />
                      </div>
                      <div className="field iconId">
                        <input
                          className="twitch-id"
                          required
                          type="text"
                          autoComplete="off"
                          placeholder="Twitch ID"
                          name="twitchId"
                          value={this.state.twitchId}
                          onChange={this.handleInputChange}
                          onKeyUp={this.handleLoginKeyUp}
                        />
                        <div class="errorMessages twitch-id-error"></div>
                        <i class="fa fa-id-card-o"></i>
                      </div>
                      <div className="field dateField d-none">
                        <input
                          className="twitch-id"
                          required
                          type="text"
                          autoComplete="off"
                          placeholder="Date"
                          name="currentDate"
                          value={this.state.currentDate}
                          onChange={this.handleInputChange}
                        />
                        <i class="fa fa-id-card-o"></i>
                      </div>
                      {/* <div className="field currentTime d-none">
                        <input
                          className="twitch-id"
                          required
                          type="text"
                          autoComplete="off"
                          placeholder="Time"
                          name="currentTime"
                          value={this.state.currentTime}
                          onChange={this.handleInputChange}
                        />
                        <i class="fa fa-id-card-o"></i>
                      </div> */}
                    </div>

                    <div class="actionButton">
                      <button
                        type="submit"
                        class="btn btn-primary signUpTwitch"
                        onClick={() => this.signUpButtonClicked()}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="myUniqueBarError" class="snackbar">
            <i class="fa fa-warning"></i> {this.state.message}
            <i class="fa fa-close"></i>
          </div> */}
      </div>
    );
  }
}

export default CATAudioModalView;
