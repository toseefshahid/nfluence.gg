import React, { Component } from "react";
import StreamMainBanner from "../images/streamMainBanner.png";
import StreamerCircle from "../images/streamerCircle.png";
import GridImage1 from "../images/GridImage-1.png";
import GridImage2 from "../images/GridImage-2.png";
import GridImage3 from "../images/GridImage-3.png";
import GridImage4 from "../images/GridImage-4.png";
import Number1 from "../images/number-1.png";
import Number2 from "../images/number-2.png";
import Number3 from "../images/number-3.png";
import AudienceGray from "../images/audienceGray.png";
import $ from "jquery";
import SignUpModel from "../auth/Signup-model-view";

class Streamers extends Component {
  constructor() {
    super();
    this.state = {
      signUpSuccess: false,

      showSignUpModal: false,
      signUpWithTwitchWasSuccessfull: false,
      successMessage: ""
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

    if (window.location.href.indexOf("streamers") > -1) {
      $("#navbarSupportedContent .navbar-nav .nav-item").removeClass("active");
      $(".streamsItem")
        .parent(".nav-item")
        .addClass("active");
    }
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
    const { onSignUpWithTwitchButtonClicked } = this.props;

    if (this.state.signUpWithTwitchWasSuccessfull) {
      var x = document.getElementById("myUniqueBar");
      x.classList.add("show");
      setTimeout(function() {
        x.className = x.className.replace("show", "");
      }, 7000);
    }

    var AudienceGrayBack = {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${AudienceGray})`
    };

    return (
      <>
        <main className="main">
          <section className="pageBanner" id="banner_section">
            <img src={StreamMainBanner} />
            <div className="itsTimeto">
              <h1 class="title text-center fontStyle">
                IT’S TIME TO MONETIZE{" "}
              </h1>
              <p class="text-center tagLine thinLine">
                Whether you’re in this for the love or in it for the greenbacks,{" "}
                <br /> monetizing your stream is easy with Nﬂuence.
              </p>
            </div>
          </section>

          <section
            id="machineLearning"
            className="SameSection streamersWaiting"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="thumbImage text-center">
                    <img src={StreamerCircle} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumbContent text-left">
                    <div className="headingSection brandTitle  gradientBorder">
                      <span className="upperTitle"> NFLUENCE IS </span>
                      <h1 className="title">
                        The platform <br /> streamers have <br /> been waiting
                        for
                      </h1>
                    </div>
                    <div className="contentSection">
                      <p>
                        Until now, inﬂuencer marketing has been a manual
                        process. A lot of time, coordination, and negotiation
                        went into connecting brand marketers and inﬂuencers.
                        Nﬂuence is here to change the game. Join the fastest
                        growing inﬂuencer marketing platform today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="gridImages page-section" id="gridImagesWithText">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={GridImage1} />
                    </div>
                    <div className="imageInfo">
                      <p>
                        {" "}
                        UNLIMITED <br /> EARNINGS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={GridImage2} />
                    </div>
                    <div className="imageInfo">
                      <p>
                        {" "}
                        THE BEST <br /> BRANDS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={GridImage3} />
                    </div>
                    <div className="imageInfo">
                      <p>
                        AMAZING <br /> OPPORTUNITIES
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={GridImage4} />
                    </div>
                    <div className="imageInfo">
                      <p>
                        EASY CAMPAIGN <br />
                        MANAGEMENT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="gridImages page-section"
            id="gridImagesWithNumbers"
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <h1 class="title text-center mainHeadingLine">
                    {" "}
                    How It Works
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={Number1} />
                    </div>
                    <div className="imageInfo">
                      <p>CHOOSE</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={Number2} />
                    </div>
                    <div className="imageInfo">
                      <p>COMPLETE</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="gridImageText text-center">
                    <div className="imgContainer">
                      <img src={Number3} />
                    </div>
                    <div className="imageInfo">
                      <p>CASHOUT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="audienceControl"
            id="audience_control"
            style={AudienceGrayBack}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div className="audienceContainer commonAttrofGrid">
                    <h1 class="title mainHeadingLine">
                      Audiences <br />
                      Of All Sizes
                    </h1>
                    <p>
                      {" "}
                      Have a small audience? We understand nano streamers are
                      much more engaged with their audiences, creating loyalty
                      and trust. In marketing jargon, this is “leveraging
                      authentic engagement” – but real-talk: it simply means
                      brands recognize that your audience respects your opinion,
                      and if you like their products they’ll pay you to tell the
                      world.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="commonAttrofGrid text-left">
                    <h1 class="title mainHeadingLine">
                      You’re In <br /> Control
                    </h1>
                    <p>Sick of being at the mercy of platform politics? </p>
                    <ul>
                      <li>Choose the brands you love </li>
                      <li>No agencies or middlemen </li>
                      <li>No compromising your values</li>
                    </ul>
                  </div>
                </div>
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

export default Streamers;
