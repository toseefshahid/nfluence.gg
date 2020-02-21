import React, { Component } from "react";
import HomeMainBanner from "../images/homeBannerImage.png";
import TwitchIcon from "../images/twitchIcon.png";
import NfluenceBannerLogo from "../images/nfluenceBannerLogo.png";
import SearchIcon from "../images/searchIcon.png";
import Camera from "../images/camera.png";
import Picon from "../images/pp.png";
import HowItWorksBack from "../images/howItWorksBack.png";
import BottomBanner from "../images/bottom-banner.png";


class HomePage extends Component {
  render() {
            var howItWorksBackground = {
              width: "auto",
              height: "auto",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
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
    return (
      <main class="main">
        <section className="mainBannerSection" id="section_01">
          <div class="row no-gutters">
            <div class="col-lg-12 col-xl-12">
              <div className="mainBanner">
                <img src={HomeMainBanner} />
                <div className="bannerContent">
                  <img className="NfluenceLogo" src={NfluenceBannerLogo} />
                  <h1>
                    {" "}
                    How Gamers <br /> Make Money
                  </h1>
                  <div className="actionButton">
                    <button class="btn btn-primary signUpTwitch">
                      {" "}
                      <img src={TwitchIcon} />
                      Sign up with Twitch{" "}
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
              <div class="col-lg-4 col-xl-4">
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
              <div className="col-lg-4 col-xl-4">
                <div className="howItWorksContent">
                  <div className="howItWorksIcon">
                    {" "}
                    <img src={Camera} />
                  </div>
                  <h1>Choose a campaign. </h1>
                  <p>
                    Perform the task live and upload. Our <br /> tech instantly
                    confirms when complete.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="howItWorksContent">
                  <div className="howItWorksIcon">
                    {" "}
                    <img src={Picon} />
                  </div>
                  <h1>Choose a campaign. </h1>
                  <p>
                    Cashout at $5.00. Instant pay into <br /> your PayPal
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="signUpBanner" id="section_03" style={signUpBanner}>
          <div className="bannerContent">
            <h1>SIGN UP EARLY AND GET $100 CREDIT</h1>
            <div className="actionButton">
              <button class="btn btn-primary signUpTwitch">
                {" "}
                <img src={TwitchIcon} />
                Sign up with Twitch{" "}
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}


export default HomePage;