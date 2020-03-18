import React, { Component } from "react";
import PopupBackground from "../images/popupBack.png";
import $ from "jquery";
import SocialMediaSignUpAPI from "../webapi/socialmedia-Signup-api";

class CATAudioModalView extends Component {
  constructor() {
    super();

    this.state = {
      twitchEmail: "",
      twitchId: "",

      showMessage: false,
      message: ""
    };

    this.socialApi = new SocialMediaSignUpAPI();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // component lifecycle methods

  componentDidMount() {
    this.loadJQuery();
  }

  // helper methods

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  loadJQuery() {
$("body").click(function(evt) {
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

  signUpButtonClicked() {
    const data = {
      subscriber: {
        email: this.state.twitchEmail,
        twitch_id: this.state.twitchId
      }
    };
    this.subscribe(data);
  }

  subscribe(data) {
      this.setState({
        showMessage: false,
        message: ""
      });

    new SocialMediaSignUpAPI().subscribe(data).then(
      response => {
        if(response.success) {
            if (this.props.onSuccess) {
                $(".close").click();
                this.props.onSuccess(response.success);
            }
        }
      },
      error => {
        let errorMessage = "Failed";
        debugger
        if (error && error.email.length !== "undefined" ) {
          errorMessage = error.email[0];
        }
        this.setState({
          showMessage: true,
          message: errorMessage
        });

        setTimeout(() => {
            this.setState({
              showMessage: false,
              message: ""
            });
        }, 7000);
      }
    );
  }

  render() {
    if (this.state.showMessage) {
                if (this.state.message) {
                  $(".msgsForUsers .errorMessages").fadeIn();
                  setTimeout(function() {
                    $(".msgsForUsers .errorMessages").fadeOut();
                  }, 5000);
                  if (this.state.message == "Enter a valid email address.") {
                    $(".errorMessages").removeClass("alreadyExist");
                    $(".msgsForUsers .errorMessages").html(
                      '<i class="fa fa-warning"></i>' + "Invalid email address"
                    );
                  } else if (this.state.message == "This field may not be blank.") {
                    $(".errorMessages").removeClass("alreadyExist");
                    $(".msgsForUsers .errorMessages").html(
                      '<i class="fa fa-warning"></i>' +
                        "Please fill in this field"
                    );
                  } else if (
                           this.state.message ==
                           "subscriber with this email already exists."
                         ) {
                           $(".errorMessages").addClass("alreadyExist");
                           $(".msgsForUsers .errorMessages").html(
                             '<i class="fa fa-warning"></i>' +
                               "Subscriber with this email already exists"
                           );
                         }
                }
         // setTimeout(function() {
            //    var x = document.getElementById("myUniqueBarError");
            //       x.classList.add("show");
            //         setTimeout(function() {
            //      x.className = x.className.replace("show", "");
            //      $("#myUniqueBarError").remove();
            
         //  }, 3000);
    }
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
                      <div className="iconEmail">
                        <input
                          className="email"
                          required
                          type="email"
                          autoComplete="off"
                          placeholder="Twitch Email"
                          name="twitchEmail"
                          value={this.state.twitchEmail}
                          onChange={this.handleInputChange}
                        />
                        <div class="errorMessages"></div>
                        <i className="fa fa-envelope icon" />
                      </div>
                      <div className="iconId">
                        <input
                          className="twitch-id"
                          required
                          type="text"
                          autoComplete="off"
                          placeholder="Twitch ID"
                          name="twitchId"
                          value={this.state.twitchId}
                          onChange={this.handleInputChange}
                        />
                        <i class="fa fa-id-card-o"></i>
                      </div>
                    </div>

                    <div class="actionButton">
                      <button
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
