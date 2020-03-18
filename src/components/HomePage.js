import React, { Component } from "react";
import HomeMainBanner from "../images/homeBannerImage.png";
import TwitchIcon from "../images/twitchIcon.png";
import NfluenceBannerLogo from "../images/nfluenceBannerLogo.png";
import SearchIcon from "../images/searchIcon.png";
import Camera from "../images/camera.png";
import Picon from "../images/pp.png";
import HowItWorksBack from "../images/howItWorksBack.png";
import BottomBanner from "../images/bottom-banner.png";
import SignUpWithTwitch from "../auth/signUpWithTwitch";
import SignUpModel from "../auth/Signup-model-view";
import $ from "jquery";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      signUpSuccess: false,

      showSignUpModal: false,
      signUpWithTwitchWasSuccessfull: false,
      successMessage : ""
    };
  }
  componentDidMount() {
    this.loadJQuery();
  }

  loadJQuery() {
    $("body").click(function(evt) {
      if (evt.target.id === "myUniqueBar") return;
      $("#myUniqueBar").removeClass("show");
    });

    if (window.location.href.indexOf("/") > -1) {
      $("#navbarSupportedContent .navbar-nav .nav-item").removeClass("active");
      $(".homePage")
        .parent(".nav-item")
        .addClass("active");
    }
   }

  showLoading(message) {
    // method to let previous component know to display loader
    this.props.showLoading(message);
  }
  handleLoginSuccess(user) {
    // method to let previous component know that user has successfully logged in
    this.props.onLoginSuccess(user);
  }

  signUpWithTwitchButtonClicked() {
    this.setState({
      showSignUpModal: true
    });
  }

  closeSignUpModal() {
    this.setState({
      showSignUpModal: false
    });
    if (this.props.onSignUpWithTwitchModalClose) {
      this.props.onSignUpWithTwitchModalClose();
    }
  }

  signUpWithTwitchWasSuccessfull(successMessage) {
    this.setState({
      showSignUpModal: false,
      signUpWithTwitchWasSuccessfull: true,
      successMessage: successMessage
    });

    setTimeout(() => {
      this.setState({
        signUpWithTwitchWasSuccessfull: false
      });
    }, 2000);
  }

  render() {
    // const { loggedInUser } = this.props;
    // let successfullyLogin;
    // if (loggedInUser !== null) {
    //   if (localStorage.getItem("loggedInTwitchUser") === null) {
    //     localStorage.setItem(
    //       "loggedInTwitchUser",
    //       JSON.stringify(loggedInUser)
    //     );

    //     if (loggedInUser.user.email) {
    //       setTimeout(function() {
    //         var x = document.getElementById("myUniqueBar");
    //         x.classList.add("show");
    //         setTimeout(function() {
    //           x.className = x.className.replace("show", "");
    //         }, 7000);
    //       }, 900);
    //     }
    //   }
    // }
 
        if (this.state.signUpWithTwitchWasSuccessfull) {
           var x = document.getElementById("myUniqueBar");
              x.classList.add("show");
                setTimeout(function() {
                  x.className = x.className.replace("show", "");
                }, 7000);
        }

    var howItWorksBackground = {
      width: "auto",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "-71px",
      backgroundPosition: "-1px",
      backgroundImage: `url(${HowItWorksBack})`
    };
    var signUpBanner = {
      width: "auto",
      height: "608px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundPosition: "-1px",
      backgroundImage: `url(${BottomBanner})`
    };

    const { onSignUpWithTwitchButtonClicked } = this.props;

    return (
      <>
        <main class="main">
          <section className="mainBannerSection" id="section_01">
            <div class="row no-gutters">
              <div class="col-lg-12 col-xl-12">
                <div className="mainBanner">
                  <img
                    className="mainBannerbackGroundImage"
                    src={HomeMainBanner}
                  />
                  <div className="bannerContent">
                    <img className="NfluenceLogo" src={NfluenceBannerLogo} />
                    <h1>
                      {" "}
                      How Gamers <br /> Make Money
                    </h1>
                    <div className="actionButton signUpLink">
                      <button
                        class="btn btn-primary signUpTwitch"
                        onClick={() => this.signUpWithTwitchButtonClicked()}
                      >
                        {" "}
                        <img src={TwitchIcon} />
                        <span> Sign up with Twitch </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="howItWorksSection"
            id="section_02"
            style={howItWorksBackground}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-xl-12">
                  <h1 className="sectionTitle"> How It Works </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-xl-4 col-sm-4">
                  <div className="howItWorksContent">
                    <div className="howItWorksIcon">
                      {" "}
                      <img src={SearchIcon} />
                    </div>
                    <h1>Choose a campaign. </h1>
                    <p>
                      Earn money from big brands with easy <br />
                      tasks like drinking a can of energy drink.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4">
                  <div className="howItWorksContent">
                    <div className="howItWorksIcon">
                      {" "}
                      <img src={Camera} />
                    </div>
                    <h1>Complete live on stream. </h1>
                    <p>
                      Perform the task live and upload. Our <br /> tech
                      instantly confirms when complete.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4">
                  <div className="howItWorksContent">
                    <div className="howItWorksIcon">
                      {" "}
                      <img src={Picon} />
                    </div>
                    <h1>Cashout with Paypal. </h1>
                    <p>
                      Cashout at $5.00. Instant pay into <br /> your PayPal
                      account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="signUpBanner"
            id="section_03"
            style={signUpBanner}
          >
            <div className="bannerContent">
              <h1>SIGN UP EARLY AND GET $100 CREDIT</h1>
              {/* <SignUpWithTwitch
                onStartAuth={this.showLoading.bind(this)}
                onLoginSuccess={this.handleLoginSuccess.bind(this)}
              /> */}
              <div className="actionButton signUpLink">
                <button
                  class="btn btn-primary signUpTwitch"
                  onClick={() => this.signUpWithTwitchButtonClicked()}
                >
                  {" "}
                  <img src={TwitchIcon} />
                  <span> Sign up with Twitch </span>
                </button>
              </div>
            </div>
          </section>
          <div id="myUniqueBar" class="snackbar">
            <i class="fa fa-check"></i> {this.state.successMessage}
            <i class="fa fa-close"></i>
          </div>
        </main>

        {onSignUpWithTwitchButtonClicked === true ? (
          <SignUpModel
            onClose={() => this.closeSignUpModal()}
            onSuccess={successMessage =>
              this.signUpWithTwitchWasSuccessfull(successMessage)
            }
          />
        ) : (
          ""
        )}
        {this.state.showSignUpModal ? (
          <SignUpModel
            onClose={() => this.closeSignUpModal()}
            onSuccess={successMessage =>
              this.signUpWithTwitchWasSuccessfull(successMessage)
            }
          />
        ) : (
          ""
        )}
      </>
    );
  }
}


export default HomePage;