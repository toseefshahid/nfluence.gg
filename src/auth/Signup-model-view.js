import React, { Component } from "react";
import PopupBackground from "../images/popupBack.png";
import $ from "jquery";
import SocialMediaSignUpAPI from "../webapi/socialmedia-Signup-api";
import firebase from '../firebase';  

class CATAudioModalView extends Component {
  constructor() {
    super();

    this.state = {
      twitchEmail: "",
      twitchId: "",
      currentDate: "",
      // currentTime: "",

      showMessage: false,
      message: ""
    };

    this.socialApi = new SocialMediaSignUpAPI();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginKeyUp = this.keyUpHandler.bind(this);
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

    //called when key is pressed in textbox
    // $(".twitch-id").keypress(function(e) {
    //   //if the letter is not digit then display error and don't type anything
    //   if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    //     return false;
    //   }
    // });
  }

  // buttons action methods

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
      $(".close").click();
    }
  }

  keyUpHandler(e) {
    let TodayDate = new Date();
    let month = TodayDate.getMonth() + 1;
    let day = TodayDate.getDate();
    let dateOnly =
      TodayDate.getFullYear() +
      "/" +
      (("" + month).length < 2 ? "0" : "") +
      month +
      "/" +
      (("" + day).length < 2 ? "0" : "") +
      day;
    let time =
      TodayDate.getHours() +
      ":" +
      TodayDate.getMinutes() +
      ":" +
      TodayDate.getSeconds();
    this.setState({
      currentDate: dateOnly + "," + time
      // currentTime: time
    });
  }

  signUpButtonClicked(e) {
    
    // const data = {
    //   subscriber: {
    //     email: this.state.twitchEmail,
    //     twitch_id: this.state.twitchId
    //   }
    // };
    //   debugger;
    // this.subscribe(data);

    // e.preventDefault();
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (this.state.twitchEmail == "") {
       debugger;
       $(".msgsForUsers .email-id").fadeIn();
       setTimeout(function() {
         $(".msgsForUsers .email-id").fadeOut();
       }, 5000);
       $(".msgsForUsers .email-id").html(
         '<i class="fa fa-warning"></i>' + "Please fill in this field"
       );
       return false;
     }
       else if (reg.test(this.state.twitchEmail) === false) {
         $(".msgsForUsers .email-id").fadeIn();
         setTimeout(function() {
           $(".msgsForUsers .email-id").fadeOut();
         }, 5000);
         $(".email-id").removeClass("alreadyExist");
         $(".msgsForUsers .email-id").html(
           '<i class="fa fa-warning"></i>' + "Invalid email address"
         );
         return false;
       } else if (this.state.twitchId == "") {
         $(".msgsForUsers .twitch-id-error").fadeIn();
         setTimeout(function() {
           $(".msgsForUsers .twitch-id-error").fadeOut();
         }, 5000);
         $(".twitch-id-error").removeClass("alreadyExist");
         $(".msgsForUsers .twitch-id-error").html(
           '<i class="fa fa-warning"></i>' + "Please fill in this field"
         );
         return false;
       }
    const subscribersRef = firebase.database().ref("subscribers");
    const subscribers = {
      Email: this.state.twitchEmail,
      Twitch_id: this.state.twitchId,
      date: this.state.currentDate
      // Time: this.state.currentTime
    };
    subscribersRef.push(subscribers);
    debugger
    if (subscribersRef.database) {
              $(".close").click();
           var x = document.getElementById("myUniqueBar");
           x.classList.add("show");
          $("#myUniqueBar").html(
            '  <i class="fa fa-check"></i> ' + 'Subscribe Successful. Thank you' +
            '<i class="fa fa-close"></i>'
          );
           setTimeout(function() {
             x.className = x.className.replace("show", "");
           }, 7000);
           
    }
      }

  subscribe(data) {
    this.setState({
      showMessage: false,
      message: ""
    });

    new SocialMediaSignUpAPI().subscribe(data).then(
      response => {
        if (response.success) {
          if (this.props.onSuccess) {
            $(".close").click();
            this.props.onSuccess(response.success);
          }
        }
      },
      error => {
        let errorMessage = "Failed";
        if (error && error.email) {
          errorMessage = error.email[0];
        } else if (error.twitch_id) {
          errorMessage = error.twitch_id[0];
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
      if (
        this.state.message == "This field may not be blank." ||
        this.state.message == "Enter a valid email address." ||
        this.state.message == "This field may not be blank." ||
        this.state.message == "subscriber with this email already exists." ||
        this.state.message == "Failed"
      ) {
        $(".msgsForUsers .email-id").fadeIn();
        setTimeout(function() {
          $(".msgsForUsers .email-id").fadeOut();
        }, 5000);
        if (this.state.message == "Enter a valid email address.") {
          $(".email-id").removeClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' + "Invalid email address"
          );
        } else if (this.state.message == "This field may not be blank.") {
          $(".email-id").removeClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' + "Please fill in this field"
          );
        } else if (this.state.message == "Failed") {
          $(".errorMessages").removeClass("alreadyExist");
          $(".msgsForUsers .errorMessages").html(
            '<i class="fa fa-warning"></i>' + "503 internal server error"
          );
        } else if (
          this.state.message == "subscriber with this email already exists."
        ) {
          $(".email-id").addClass("alreadyExist");
          $(".msgsForUsers .email-id").html(
            '<i class="fa fa-warning"></i>' +
              "Subscriber with this email already exists"
          );
        }
      } else if (this.state.message == "A valid integer is required.") {
        $(".msgsForUsers .twitch-id-error").fadeIn();
        setTimeout(function() {
          $(".msgsForUsers .twitch-id-error").fadeOut();
        }, 5000);
        $(".twitch-id-error").removeClass("alreadyExist");
        $(".msgsForUsers .twitch-id-error").html(
          '<i class="fa fa-warning"></i>' + "A valid integer is required."
        );
      }
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
