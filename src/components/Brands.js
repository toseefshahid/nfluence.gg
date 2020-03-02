import React, { Component } from "react";
import ThumbsUp from "../images/auto-thumbs-up1.png";
import Arrow from "../images/Arrow.png";
import GoNanoBackImage from "../images/go-nano-Background-Image.png";
import LeftQuote from "../images/leftQuote.png";
import RightQuote from "../images/rightQuote.png";
import GraphImage from "../images/graph.png";
import CompetiveBackImage from "../images/competiveBackImage.png";
import ScreenOne from "../images/Screen-1_03.png";
import ScreenTwo from "../images/Screen-2_03.png";
import ScreenThree from "../images/Screen-3_03.png";
import ArrowsDirection from "../images/arrowsDirection.png";
import ExtremeGraph from "../images/extreme-graph.png";
import BackGrayImage from "../images/backGrayImage.png";
import $ from "jquery";

class Brands extends Component {
  componentDidMount() {
    this.loadJQuery();
  }

  loadJQuery() {
        if (window.location.href.indexOf("brands") > -1) {
        $("#navbarSupportedContent .navbar-nav .nav-item").removeClass(
        "active"
        );
        $(".brandsItem")
        .parent(".nav-item")
        .addClass("active");
        }
          $(".screens .prev-arrow").click(function() {
          $("html,body").animate(
          {
          scrollTop: $("#screen_Section").offset().top - 10
          },
          "slow"
          );
          });

          $(".screens .next-arrow").click(function() {
          $("html,body").animate(
            {
              scrollTop: $("#screen_Section").offset().top - 10
            },
            "slow"
          );
          });
  }

  render() {
    var GoNanoImage = {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${GoNanoBackImage})`
    };
    var CompetiveImage = {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${CompetiveBackImage})`
    };
        var ExtremeBackGrayImage = {
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${BackGrayImage})`
        };
    return (
      <main class="main">
        <section id="machineLearning" className="SameSection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="thumbImage text-center">
                  <img src={ThumbsUp} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbContent text-left">
                  <div className="headingSection brandTitle  gradientBorder">
                    <h2 class="title"> Brands </h2>
                    <span className="upperTitle">
                      {" "}
                      WE OFFER THE MOST INTELLIGENT
                    </span>
                    <h1 className="title">
                      {" "}
                      Machine-Learning <br /> Inﬂuencer Marketing Platform{" "}
                    </h1>
                  </div>
                  <div className="contentSection">
                    <p>
                      Until now, inﬂuencer marketing has been a manual process.
                      A lot of time, coordination, and negotiation went into
                      connecting brand marketers and inﬂuencers. Nﬂuence is here
                      to change the game. Join the fastest growing inﬂuencer
                      marketing platform today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="boxsSection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="numbersAndMillions">
                  <div className="innerNumbers">
                    <span className="numbers"> 323 </span>
                    <span className="millions"> M </span>
                  </div>
                  <div className="innerglobal">
                    <p className="globalContent"> GLOBAL AUDIENCE </p>
                    <span className="arrowImage">
                      <img src={Arrow} />
                    </span>
                    <span className="percentageContent"> +37% </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="numbersAndMillions">
                  <div className="innerNumbers">
                    <span className="numbers">46 </span>
                    <span className="millions"> M </span>
                  </div>
                  <div className="innerglobal">
                    <p className="globalContent"> UNIQUE VIEWERS </p>
                    <p className="percentageContentText">
                      2016 League of Legends World Championship
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="numbersAndMillions">
                  <div className="innerNumbers">
                    <span className="numbers">$266 </span>
                    <span className="millions"> M </span>
                  </div>
                  <div className="innerglobal">
                    <p className="globalContent"> GLOBAL SPONSORSHIP </p>
                    <span className="arrowImage">
                      <img src={Arrow} />
                    </span>
                    <span className="percentageContent">
                      +58%
                      <span className="revinew">
                        Revenue <br />
                        in 2017{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="numbersAndMillions">
                  <div className="innerNumbers">
                    <span className="numbers">$5</span>
                    <span className="millions"> M </span>
                  </div>
                  <div className="innerglobal">
                    <p className="globalContent">REVENUE PER FAN</p>
                    <p className="percentageContentText">
                      Huge untapped growth opportunity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="go_Nano" style={GoNanoImage}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title text-center"> GO NANO </h1>
              </div>
              <div className="col-lg-12">
                <div className="nanoContent text-center">
                  <div className="nanoInnercontent">
                    <p>
                      “Brands are choosing to collaborate with nano-influencers,
                      who can have as few as 100 followers.
                    </p>
                    <p>
                      {" "}
                      ...mainly because [they] are much more relatable and
                      trustworthy,
                    </p>
                    <p>
                      {" "}
                      and their endorsements seem a lot more genuine and
                      authentic.
                    </p>
                    <span className="businessInsider"> BUSINESS INSIDER</span>
                  </div>
                  <span className="leftQuote">
                    <img src={LeftQuote} />
                  </span>
                  <span className="rightQuote">
                    <img src={RightQuote} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="value_scale">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title text-center fontStyle">
                  {" "}
                  THE VALUE SCALE{" "}
                </h1>
                <p className="text-center tagLine thinLine">
                  {" "}
                  UNDERSTANDING INFLUENCER MARKETING{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="valueScaleGraph text-center">
                  <img src={GraphImage} />
                </div>
                <div className="leftNano underGraph">
                  <h3> NANO </h3>
                  <p>
                    {" "}
                    Authentic organic engagement <br />
                    yields higher impact{" "}
                  </p>
                </div>
                <div className="rightMicro underGraph">
                  <h3> MACRO </h3>
                  <p>
                    {" "}
                    Huge popular aduiences <br /> offers mass exposure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section"
          id="extreme_roi"
          style={ExtremeBackGrayImage}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 class="title text-center fontStyle">EXTREME ROI </h1>
                <p class="text-center tagLine thinLine">
                  WHY EARLY ADOPTERS WILL WIN BIG{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="extremeGraphImage">
                  <img src={ExtremeGraph} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="extremeGraphImage">
                  <h2 className="CUSTOMERS ">
                    CUSTOMERS RESPOND TO INFLUENCERS
                  </h2>
                  <ul>
                    <li>
                      <strong> 74% </strong>{" "}
                      <p>relied on social media to make purchasing decisions</p>
                    </li>
                    <li>
                      <strong> 49% </strong>
                      <p>relied on influencers for product recommendations</p>
                    </li>
                    <li>
                      <strong> 42% </strong>
                      <p>
                        {" "}
                        who saw influencer advertisements ended up trying the
                        recommendation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section"
          id="comperitive_advantage"
          style={CompetiveImage}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="title text-center fontStyle">
                  {" "}
                  COMPETITIVE ADVANTAGE{" "}
                </h1>
                <p className="text-center tagLine thinLine">
                  {" "}
                  WHY EARLY ADOPTERS WILL WIN BIG{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-xl-6 col-md-12">
                <div className="competitiveRows">
                  <div className="iconForComp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                      xmlSpace="preserve"
                    >
                      <g id="Layer_1" style={{ display: "none" }}>
                        <g style={{ display: "inline" }}>
                          <defs>
                            <polygon
                              id="SVGID_1_"
                              points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <polyline
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="14.246"
                            y1="24.366"
                            x2="19.907"
                            y2="19.059"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="36.889"
                            y1="15.079"
                            x2="41.135"
                            y2="11.099"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="31.228"
                            y1="17.733"
                            x2="24.153"
                            y2="17.733"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="10.001"
                            y1="32.327"
                            x2="10.001"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="15.662"
                            y1="32.327"
                            x2="15.662"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="21.322"
                            y1="24.366"
                            x2="21.322"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="26.983"
                            y1="24.366"
                            x2="26.983"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="32.644"
                            y1="24.366"
                            x2="32.644"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="38.304"
                            y1="24.366"
                            x2="38.304"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="43.965"
                            y1="41.614"
                            x2="43.965"
                            y2="15.079"
                          />
                        </g>
                      </g>
                      <g id="Layer_2" style={{ display: "none" }}>
                        <g id="XMLID_2_" style={{ display: "inline" }}>
                          <path
                            id="XMLID_17_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                          />
                          <polyline
                            id="XMLID_16_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                          />
                          <polygon
                            id="XMLID_15_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                          />
                          <line
                            id="XMLID_14_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="24.013"
                            x2="8.891"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_13_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="11.784"
                            x2="8.891"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_12_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="17.898"
                            x2="8.891"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_11_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="28.599"
                            x2="22.385"
                            y2="34.714"
                          />
                          <polyline
                            id="XMLID_10_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="11.889,30.128     16.387,30.128 16.387,34.714   "
                          />
                          <polyline
                            id="XMLID_9_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                          />
                          <line
                            id="XMLID_8_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="30.128"
                            x2="26.883"
                            y2="30.128"
                          />
                          <line
                            id="XMLID_7_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="24.013"
                            x2="32.88"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_6_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="17.898"
                            x2="32.88"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_5_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="11.784"
                            x2="32.88"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_4_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="7.198"
                            x2="22.385"
                            y2="1.083"
                          />
                          <polygon
                            id="XMLID_3_"
                            style={{ fill: "none" }}
                            points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                          />
                        </g>
                      </g>
                      <g id="Layer_3">
                        <g id="XMLID_18_">
                          <polygon
                            id="XMLID_23_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            points="3.696,2.761     47.135,2.761 47.135,47.105 3.696,47.105 3.696,2.761   "
                          />
                          <line
                            id="XMLID_22_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            x1="3.696"
                            y1="8.674"
                            x2="47.135"
                            y2="8.674"
                          />
                          <polyline
                            id="XMLID_21_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            points="16.728,20.499     22.52,26.411 16.728,32.324   "
                          />
                          <line
                            id="XMLID_20_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            x1="25.416"
                            y1="30.846"
                            x2="34.104"
                            y2="30.846"
                          />
                          <polygon
                            id="XMLID_19_"
                            style={{ fill: "none" }}
                            points="2.248,48.583 48.583,48.583 48.583,1.283 2.248,1.283 2.248,48.583   "
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="comptContent">
                    <h2> FIRST TO MARKET</h2>
                    <p>
                      The first transaction-based micro-task marketplace for
                      influencers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-md-12">
                <div className="competitiveRows">
                  <div className="iconForComp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                      xmlSpace="preserve"
                    >
                      <g id="Layer_1">
                        <g>
                          <defs>
                            <polygon
                              id="SVGID_1_"
                              points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <polyline
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="14.246"
                            y1="24.366"
                            x2="19.907"
                            y2="19.059"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="36.889"
                            y1="15.079"
                            x2="41.135"
                            y2="11.099"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="31.228"
                            y1="17.733"
                            x2="24.153"
                            y2="17.733"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="10.001"
                            y1="32.327"
                            x2="10.001"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="15.662"
                            y1="32.327"
                            x2="15.662"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="21.322"
                            y1="24.366"
                            x2="21.322"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="26.983"
                            y1="24.366"
                            x2="26.983"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="32.644"
                            y1="24.366"
                            x2="32.644"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="38.304"
                            y1="24.366"
                            x2="38.304"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="43.965"
                            y1="41.614"
                            x2="43.965"
                            y2="15.079"
                          />
                        </g>
                      </g>
                      <g id="Layer_2" style={{ display: "none" }}>
                        <g id="XMLID_2_" style={{ display: "inline" }}>
                          <path
                            id="XMLID_17_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                          />
                          <polyline
                            id="XMLID_16_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                          />
                          <polygon
                            id="XMLID_15_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                          />
                          <line
                            id="XMLID_14_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="24.013"
                            x2="8.891"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_13_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="11.784"
                            x2="8.891"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_12_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="17.898"
                            x2="8.891"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_11_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="28.599"
                            x2="22.385"
                            y2="34.714"
                          />
                          <polyline
                            id="XMLID_10_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="11.889,30.128     16.387,30.128 16.387,34.714   "
                          />
                          <polyline
                            id="XMLID_9_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                          />
                          <line
                            id="XMLID_8_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="30.128"
                            x2="26.883"
                            y2="30.128"
                          />
                          <line
                            id="XMLID_7_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="24.013"
                            x2="32.88"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_6_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="17.898"
                            x2="32.88"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_5_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="11.784"
                            x2="32.88"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_4_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="7.198"
                            x2="22.385"
                            y2="1.083"
                          />
                          <polygon
                            id="XMLID_3_"
                            style={{ fill: "none" }}
                            points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="comptContent">
                    <h2> GROWING TAM </h2>
                    <p>
                      Streaming, Game-streaming and eSports are in exponential
                      growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-md-12">
                <div className="competitiveRows">
                  <div className="iconForComp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                      xmlSpace="preserve"
                    >
                      <g id="Layer_1" style={{ display: "none" }}>
                        <g style={{ display: "inline" }}>
                          <defs>
                            <polygon
                              id="SVGID_1_"
                              points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <polyline
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="14.246"
                            y1="24.366"
                            x2="19.907"
                            y2="19.059"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="36.889"
                            y1="15.079"
                            x2="41.135"
                            y2="11.099"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="31.228"
                            y1="17.733"
                            x2="24.153"
                            y2="17.733"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="10.001"
                            y1="32.327"
                            x2="10.001"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="15.662"
                            y1="32.327"
                            x2="15.662"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="21.322"
                            y1="24.366"
                            x2="21.322"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="26.983"
                            y1="24.366"
                            x2="26.983"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="32.644"
                            y1="24.366"
                            x2="32.644"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="38.304"
                            y1="24.366"
                            x2="38.304"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="43.965"
                            y1="41.614"
                            x2="43.965"
                            y2="15.079"
                          />
                        </g>
                      </g>
                      <g id="Layer_2" style={{ display: "none" }}>
                        <g id="XMLID_2_" style={{ display: "inline" }}>
                          <path
                            id="XMLID_17_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                          />
                          <polyline
                            id="XMLID_16_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                          />
                          <polygon
                            id="XMLID_15_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                          />
                          <line
                            id="XMLID_14_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="24.013"
                            x2="8.891"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_13_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="11.784"
                            x2="8.891"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_12_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="17.898"
                            x2="8.891"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_11_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="28.599"
                            x2="22.385"
                            y2="34.714"
                          />
                          <polyline
                            id="XMLID_10_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="11.889,30.128     16.387,30.128 16.387,34.714   "
                          />
                          <polyline
                            id="XMLID_9_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                          />
                          <line
                            id="XMLID_8_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="30.128"
                            x2="26.883"
                            y2="30.128"
                          />
                          <line
                            id="XMLID_7_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="24.013"
                            x2="32.88"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_6_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="17.898"
                            x2="32.88"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_5_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="11.784"
                            x2="32.88"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_4_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="7.198"
                            x2="22.385"
                            y2="1.083"
                          />
                          <polygon
                            id="XMLID_3_"
                            style={{ fill: "none" }}
                            points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                          />
                        </g>
                      </g>
                      <g id="Layer_3" style={{ display: "none" }}>
                        <g id="XMLID_18_" style={{ display: "inline" }}>
                          <polygon
                            id="XMLID_23_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            points="3.696,2.761     47.135,2.761 47.135,47.105 3.696,47.105 3.696,2.761   "
                          />
                          <line
                            id="XMLID_22_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            x1="3.696"
                            y1="8.674"
                            x2="47.135"
                            y2="8.674"
                          />
                          <polyline
                            id="XMLID_21_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            points="16.728,20.499     22.52,26.411 16.728,32.324   "
                          />
                          <line
                            id="XMLID_20_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.1703",
                              strokeMiterlimit: 10
                            }}
                            x1="25.416"
                            y1="30.846"
                            x2="34.104"
                            y2="30.846"
                          />
                          <polygon
                            id="XMLID_19_"
                            style={{ fill: "none" }}
                            points="2.248,48.583 48.583,48.583 48.583,1.283 2.248,1.283 2.248,48.583   "
                          />
                        </g>
                      </g>
                      <g id="Layer_4">
                        <g id="XMLID_30_">
                          <defs>
                            <polygon
                              id="XMLID_1_"
                              points="12.517,49.48 36.5,49.48 36.5,0 12.517,0 12.517,49.48    "
                            />
                          </defs>
                          <clipPath id="XMLID_31_">
                            <use
                              xlinkHref="#XMLID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <line
                            id="XMLID_28_"
                            style={{
                              clipPath: "url(#XMLID_31_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.6628",
                              strokeMiterlimit: 10
                            }}
                            x1="12.517"
                            y1="24.733"
                            x2="36.5"
                            y2="24.733"
                          />
                          <polyline
                            id="XMLID_27_"
                            style={{
                              clipPath: "url(#XMLID_31_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.6628",
                              strokeMiterlimit: 10
                            }}
                            points="    32.003,9.739 24.508,2.242 17.014,9.739   "
                          />
                          <line
                            id="XMLID_26_"
                            style={{
                              clipPath: "url(#XMLID_31_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.6628",
                              strokeMiterlimit: 10
                            }}
                            x1="24.508"
                            y1="2.242"
                            x2="24.508"
                            y2="20.234"
                          />
                          <polyline
                            id="XMLID_25_"
                            style={{
                              clipPath: "url(#XMLID_31_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.6628",
                              strokeMiterlimit: 10
                            }}
                            points="    17.014,39.726 24.508,47.223 32.003,39.726   "
                          />
                          <line
                            id="XMLID_24_"
                            style={{
                              clipPath: "url(#XMLID_31_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.6628",
                              strokeMiterlimit: 10
                            }}
                            x1="24.508"
                            y1="47.223"
                            x2="24.508"
                            y2="29.231"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="comptContent">
                    <h2> HIGHLY SCALABLE</h2>
                    <p>
                      Revenue scales with influencer channel growth
                      automatically doing the math
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-md-12">
                <div className="competitiveRows">
                  <div className="iconForComp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                      xmlSpace="preserve"
                    >
                      <g id="Layer_1" style={{ display: "none" }}>
                        <g style={{ display: "inline" }}>
                          <defs>
                            <polygon
                              id="SVGID_1_"
                              points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <polyline
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                          />
                          <path
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="14.246"
                            y1="24.366"
                            x2="19.907"
                            y2="19.059"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="36.889"
                            y1="15.079"
                            x2="41.135"
                            y2="11.099"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="31.228"
                            y1="17.733"
                            x2="24.153"
                            y2="17.733"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="10.001"
                            y1="32.327"
                            x2="10.001"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="15.662"
                            y1="32.327"
                            x2="15.662"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="21.322"
                            y1="24.366"
                            x2="21.322"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="26.983"
                            y1="24.366"
                            x2="26.983"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="32.644"
                            y1="24.366"
                            x2="32.644"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="38.304"
                            y1="24.366"
                            x2="38.304"
                            y2="41.614"
                          />
                          <line
                            style={{
                              clipPath: "url(#SVGID_2_)",
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "1.9931",
                              strokeMiterlimit: 10
                            }}
                            x1="43.965"
                            y1="41.614"
                            x2="43.965"
                            y2="15.079"
                          />
                        </g>
                      </g>
                      <g id="Layer_2">
                        <g id="XMLID_2_">
                          <path
                            id="XMLID_17_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                          />
                          <polyline
                            id="XMLID_16_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                          />
                          <polygon
                            id="XMLID_15_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                          />
                          <line
                            id="XMLID_14_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="24.013"
                            x2="8.891"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_13_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="11.784"
                            x2="8.891"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_12_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="5.892"
                            y1="17.898"
                            x2="8.891"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_11_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="28.599"
                            x2="22.385"
                            y2="34.714"
                          />
                          <polyline
                            id="XMLID_10_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="11.889,30.128     16.387,30.128 16.387,34.714   "
                          />
                          <polyline
                            id="XMLID_9_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                          />
                          <line
                            id="XMLID_8_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="30.128"
                            x2="26.883"
                            y2="30.128"
                          />
                          <line
                            id="XMLID_7_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="24.013"
                            x2="32.88"
                            y2="24.013"
                          />
                          <line
                            id="XMLID_6_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="17.898"
                            x2="32.88"
                            y2="17.898"
                          />
                          <line
                            id="XMLID_5_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="29.882"
                            y1="11.784"
                            x2="32.88"
                            y2="11.784"
                          />
                          <line
                            id="XMLID_4_"
                            style={{
                              fill: "none",
                              stroke: "#9966FF",
                              strokeWidth: "2.5689",
                              strokeMiterlimit: 10
                            }}
                            x1="22.385"
                            y1="7.198"
                            x2="22.385"
                            y2="1.083"
                          />
                          <polygon
                            id="XMLID_3_"
                            style={{ fill: "none" }}
                            points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="comptContent">
                    <h2> INTELLIGENT MATCHMAKING </h2>
                    <p>
                      Our tech learns streamers interests and matches them with
                      the right brands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section screens" id="screen_Section">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="screeNGrid">
                  <div className="leftTextPart textSection gradientBorder ">
                    <h1 className="title text-center fontStyle"> AUTO </h1>
                    <p className="text-center screenTagLine">
                      {" "}
                      Validation of brand impressions at scale{" "}
                    </p>
                    <div className="competitiveRows">
                      <div className="iconForComp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                          style={{ enableBackground: "new 0 0 50 50" }}
                          xmlSpace="preserve"
                        >
                          <g id="Layer_1" style={{ display: "none" }}>
                            <g style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="SVGID_1_"
                                  points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                                />
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use
                                  xlinkHref="#SVGID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <polyline
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="14.246"
                                y1="24.366"
                                x2="19.907"
                                y2="19.059"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="36.889"
                                y1="15.079"
                                x2="41.135"
                                y2="11.099"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="31.228"
                                y1="17.733"
                                x2="24.153"
                                y2="17.733"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="10.001"
                                y1="32.327"
                                x2="10.001"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="15.662"
                                y1="32.327"
                                x2="15.662"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="21.322"
                                y1="24.366"
                                x2="21.322"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="26.983"
                                y1="24.366"
                                x2="26.983"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="32.644"
                                y1="24.366"
                                x2="32.644"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="38.304"
                                y1="24.366"
                                x2="38.304"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="43.965"
                                y1="41.614"
                                x2="43.965"
                                y2="15.079"
                              />
                            </g>
                          </g>
                          <g id="Layer_2" style={{ display: "none" }}>
                            <g id="XMLID_2_" style={{ display: "inline" }}>
                              <path
                                id="XMLID_17_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                              />
                              <polyline
                                id="XMLID_16_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                              />
                              <polygon
                                id="XMLID_15_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                              />
                              <line
                                id="XMLID_14_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="24.013"
                                x2="8.891"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_13_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="11.784"
                                x2="8.891"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_12_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="17.898"
                                x2="8.891"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_11_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="28.599"
                                x2="22.385"
                                y2="34.714"
                              />
                              <polyline
                                id="XMLID_10_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="11.889,30.128     16.387,30.128 16.387,34.714   "
                              />
                              <polyline
                                id="XMLID_9_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                              />
                              <line
                                id="XMLID_8_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="30.128"
                                x2="26.883"
                                y2="30.128"
                              />
                              <line
                                id="XMLID_7_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="24.013"
                                x2="32.88"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_6_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="17.898"
                                x2="32.88"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_5_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="11.784"
                                x2="32.88"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_4_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="7.198"
                                x2="22.385"
                                y2="1.083"
                              />
                              <polygon
                                id="XMLID_3_"
                                style={{ fill: "none" }}
                                points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                              />
                            </g>
                          </g>
                          <g id="Layer_3" style={{ display: "none" }}>
                            <g id="XMLID_18_" style={{ display: "inline" }}>
                              <polygon
                                id="XMLID_23_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="3.696,2.761     47.135,2.761 47.135,47.105 3.696,47.105 3.696,2.761   "
                              />
                              <line
                                id="XMLID_22_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="3.696"
                                y1="8.674"
                                x2="47.135"
                                y2="8.674"
                              />
                              <polyline
                                id="XMLID_21_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="16.728,20.499     22.52,26.411 16.728,32.324   "
                              />
                              <line
                                id="XMLID_20_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="25.416"
                                y1="30.846"
                                x2="34.104"
                                y2="30.846"
                              />
                              <polygon
                                id="XMLID_19_"
                                style={{ fill: "none" }}
                                points="2.248,48.583 48.583,48.583 48.583,1.283 2.248,1.283 2.248,48.583   "
                              />
                            </g>
                          </g>
                          <g id="Layer_4" style={{ display: "none" }}>
                            <g id="XMLID_30_" style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="XMLID_1_"
                                  points="12.517,49.48 36.5,49.48 36.5,0 12.517,0 12.517,49.48    "
                                />
                              </defs>
                              <clipPath id="XMLID_75_">
                                <use
                                  xlinkHref="#XMLID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <line
                                id="XMLID_28_"
                                style={{
                                  clipPath: "url(#XMLID_75_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="12.517"
                                y1="24.733"
                                x2="36.5"
                                y2="24.733"
                              />
                              <polyline
                                id="XMLID_27_"
                                style={{
                                  clipPath: "url(#XMLID_75_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    32.003,9.739 24.508,2.242 17.014,9.739   "
                              />
                              <line
                                id="XMLID_26_"
                                style={{
                                  clipPath: "url(#XMLID_75_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="2.242"
                                x2="24.508"
                                y2="20.234"
                              />
                              <polyline
                                id="XMLID_25_"
                                style={{
                                  clipPath: "url(#XMLID_75_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    17.014,39.726 24.508,47.223 32.003,39.726   "
                              />
                              <line
                                id="XMLID_24_"
                                style={{
                                  clipPath: "url(#XMLID_75_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="47.223"
                                x2="24.508"
                                y2="29.231"
                              />
                            </g>
                          </g>
                          <g id="Layer_5" style={{ display: "none" }}>
                            <g id="XMLID_35_" style={{ display: "inline" }}>
                              <path
                                id="XMLID_39_"
                                style={{ fill: "#120A24" }}
                                d="M48.187,12.249c-0.44-0.276-0.988-0.302-1.451-0.067l-9.778,4.959v-5.119    c0-1.669-1.339-3.027-2.984-3.027H4.13c-1.646,0-2.984,1.358-2.984,3.027v24.217c0,1.669,1.338,3.027,2.984,3.027h29.844    c1.645,0,2.984-1.358,2.984-3.027v-5.119l9.778,4.959c0.463,0.232,1.011,0.208,1.451-0.067c0.44-0.276,0.708-0.763,0.708-1.287    v-21.19C48.896,13.011,48.628,12.524,48.187,12.249z M45.911,32.276l-9.778-4.959c-0.463-0.234-1.012-0.208-1.452,0.067    c-0.439,0.276-0.707,0.763-0.707,1.287v7.568H4.13V12.023h29.844v7.568c0,0.525,0.268,1.012,0.707,1.287    c0.44,0.275,0.989,0.299,1.452,0.067l9.778-4.959V32.276z"
                              />
                              <path
                                id="XMLID_36_"
                                style={{ fill: "#120A24" }}
                                d="M26.488,18.199c-0.973-1.059-2.275-1.643-3.666-1.643l-0.001,0    c-1.391,0.001-2.691,0.584-3.661,1.64l-0.109,0.118l-0.103-0.111c-0.971-1.059-2.271-1.64-3.661-1.64c0,0-0.001,0-0.003,0    c-1.389,0-2.691,0.581-3.666,1.642c-1.935,2.116-1.936,5.557,0.006,7.682l6.342,6.848c0.282,0.304,0.676,0.477,1.088,0.477    s0.806-0.173,1.088-0.477l6.348-6.855c1.935-2.117,1.934-5.562-0.001-7.678C26.49,18.201,26.489,18.2,26.488,18.199z     M24.309,23.815l-5.254,5.674l-5.247-5.666c-0.882-0.966-0.882-2.597-0.003-3.559c0.403-0.438,0.929-0.679,1.481-0.679    c0.001,0,0.001,0,0.001,0c0.552,0.001,1.078,0.242,1.475,0.676l1.189,1.302c0.283,0.309,0.682,0.46,1.095,0.485    c0.412,0,0.807-0.173,1.089-0.478l1.207-1.306c0.803-0.875,2.158-0.876,2.963,0C25.185,21.227,25.184,22.857,24.309,23.815z"
                              />
                            </g>
                          </g>
                          <g id="Layer_6" style={{ display: "none" }}>
                            <g id="XMLID_47_" style={{ display: "inline" }}>
                              <g id="XMLID_60_">
                                <g id="XMLID_67_">
                                  <g id="XMLID_68_">
                                    <g id="XMLID_69_">
                                      <g id="XMLID_70_">
                                        <path
                                          id="XMLID_45_"
                                          style={{ fill: "#120A24" }}
                                          d="M26.482,47.986h-2.998c-2.48,0-4.497-2.017-4.497-4.497v-2.538         c-0.6-0.211-1.184-0.452-1.752-0.722l-1.792,1.792c-1.754,1.754-4.605,1.754-6.359,0l-2.12-2.12         c-0.849-0.849-1.317-1.978-1.317-3.179c0-1.202,0.468-2.33,1.317-3.18l1.792-1.792c-0.269-0.566-0.511-1.151-0.722-1.751         H5.497C3.017,29.999,1,27.982,1,25.502v-2.998c0-2.48,2.017-4.497,4.497-4.497h2.538c0.211-0.6,0.452-1.185,0.722-1.751         l-1.792-1.792c-0.849-0.849-1.317-1.978-1.317-3.179s0.468-2.33,1.317-3.18l2.12-2.119c1.754-1.754,4.605-1.754,6.359,0         l2.566,2.565c0.586,0.585,0.586,1.534,0,2.12s-1.534,0.586-2.12,0l-2.566-2.565c-0.586-0.584-1.534-0.584-2.12,0l-2.12,2.12         c-0.284,0.283-0.439,0.659-0.439,1.06c0,0.4,0.155,0.777,0.439,1.059l2.566,2.567c0.474,0.474,0.575,1.206,0.249,1.792         c-0.558,0.996-1.004,2.077-1.326,3.214c-0.183,0.645-0.771,1.09-1.442,1.09H5.497c-0.827,0-1.499,0.673-1.499,1.499v2.998         c0,0.826,0.672,1.499,1.499,1.499h3.635c0.67,0,1.259,0.445,1.442,1.09c0.322,1.137,0.768,2.218,1.326,3.214         c0.326,0.586,0.225,1.317-0.249,1.792l-2.566,2.566c-0.284,0.283-0.439,0.659-0.439,1.06c0,0.4,0.157,0.777,0.439,1.06         l2.12,2.12c0.586,0.584,1.534,0.584,2.12,0l2.566-2.565c0.476-0.474,1.206-0.575,1.792-0.249         c0.997,0.558,2.077,1.003,3.213,1.325c0.646,0.183,1.091,0.771,1.091,1.442v3.635c0,0.826,0.672,1.499,1.499,1.499h2.998         c0.827,0,1.499-0.673,1.499-1.499v-3.635c0-0.67,0.445-1.259,1.091-1.442c1.136-0.322,2.216-0.768,3.213-1.325         c0.586-0.327,1.317-0.225,1.792,0.249l2.566,2.565c0.586,0.584,1.534,0.584,2.12,0l2.12-2.12         c0.283-0.283,0.439-0.66,0.439-1.06c0-0.4-0.155-0.777-0.439-1.059l-2.566-2.567c-0.474-0.474-0.575-1.206-0.249-1.792         c0.558-0.996,1.004-2.077,1.326-3.214c0.183-0.645,0.771-1.09,1.442-1.09h3.635c0.827,0,1.499-0.673,1.499-1.499v-2.998         c0-0.828,0.67-1.499,1.499-1.499c0.829,0,1.499,0.671,1.499,1.499v2.998c0,2.48-2.017,4.497-4.497,4.497h-2.538         c-0.211,0.6-0.452,1.185-0.722,1.751l1.792,1.792c0.849,0.849,1.317,1.978,1.317,3.179c0,1.201-0.468,2.33-1.317,3.179         l-2.12,2.12c-1.754,1.754-4.605,1.754-6.359,0l-1.792-1.792c-0.568,0.269-1.152,0.511-1.752,0.722v2.538         C30.979,45.969,28.961,47.986,26.482,47.986z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g id="XMLID_65_">
                                  <circle
                                    id="XMLID_44_"
                                    style={{ fill: "#120A24" }}
                                    cx="24.983"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                                <g id="XMLID_63_">
                                  <circle
                                    id="XMLID_43_"
                                    style={{ fill: "#120A24" }}
                                    cx="30.979"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                                <g id="XMLID_61_">
                                  <circle
                                    id="XMLID_42_"
                                    style={{ fill: "#120A24" }}
                                    cx="18.987"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                              </g>
                              <g id="XMLID_48_">
                                <g id="XMLID_49_">
                                  <g id="XMLID_50_">
                                    <g id="XMLID_55_">
                                      <path
                                        id="XMLID_56_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,12.012c-5.223,0-10.492-1.391-10.492-4.497s5.27-4.497,10.492-4.497        S42.97,4.409,42.97,7.515S37.7,12.012,32.477,12.012z M25.119,7.515c0.704,0.554,3.216,1.499,7.358,1.499        s6.654-0.945,7.358-1.499c-0.704-0.554-3.216-1.499-7.358-1.499S25.823,6.961,25.119,7.515z M40.012,7.695h0.015H40.012z"
                                      />
                                    </g>
                                    <g id="XMLID_53_">
                                      <path
                                        id="XMLID_37_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,18.008c-5.223,0-10.492-1.391-10.492-4.497V7.515        c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.868c0.441,0.521,3.014,1.626,7.495,1.626        c4.481,0,7.054-1.105,7.495-1.626V7.515c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.996        C42.97,16.617,37.7,18.008,32.477,18.008z"
                                      />
                                    </g>
                                    <g id="XMLID_51_">
                                      <path
                                        id="XMLID_34_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,24.004c-5.223,0-10.492-1.391-10.492-4.497v-5.996        c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.868c0.441,0.521,3.014,1.626,7.495,1.626        c4.481,0,7.054-1.105,7.495-1.626v-5.868c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.996        C42.97,22.613,37.7,24.004,32.477,24.004z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Layer_7">
                            <g id="XMLID_74_">
                              <g id="XMLID_90_">
                                <g id="XMLID_91_">
                                  <path
                                    id="XMLID_94_"
                                    style={{ fill: "#120A24" }}
                                    d="M43.854,39.709H5.758c-2.424,0-4.396-1.972-4.396-4.396V8.938      c0-2.424,1.972-4.396,4.396-4.396h38.096c2.424,0,4.396,1.972,4.396,4.396v26.374C48.25,37.737,46.278,39.709,43.854,39.709z       M5.758,7.473c-0.808,0-1.465,0.657-1.465,1.465v26.374c0,0.808,0.658,1.465,1.465,1.465h38.096      c0.808,0,1.465-0.657,1.465-1.465V8.938c0-0.808-0.658-1.465-1.465-1.465H5.758z"
                                  />
                                  <path
                                    id="XMLID_66_"
                                    style={{ fill: "#120A24" }}
                                    d="M5.758,48.5c-0.375,0-0.75-0.143-1.036-0.429c-0.572-0.572-0.572-1.5,0-2.072      l8.791-8.791c0.572-0.572,1.5-0.572,2.072,0c0.572,0.572,0.572,1.5,0,2.072l-8.791,8.791C6.508,48.357,6.133,48.5,5.758,48.5z"
                                  />
                                  <path
                                    id="XMLID_64_"
                                    style={{ fill: "#120A24" }}
                                    d="M43.854,48.5c-0.375,0-0.75-0.143-1.036-0.429l-8.791-8.791      c-0.572-0.572-0.572-1.5,0-2.072s1.5-0.572,2.072,0l8.791,8.791c0.572,0.572,0.572,1.5,0,2.072      C44.604,48.357,44.229,48.5,43.854,48.5z"
                                  />
                                </g>
                              </g>
                              <g id="XMLID_80_">
                                <g id="XMLID_81_">
                                  <g id="XMLID_82_">
                                    <g id="XMLID_85_">
                                      <g id="XMLID_86_">
                                        <g id="XMLID_87_">
                                          <path
                                            id="XMLID_62_"
                                            style={{ fill: "#120A24" }}
                                            d="M24.806,23.591c-2.424,0-4.396-1.972-4.396-4.396s1.972-4.396,4.396-4.396          s4.396,1.972,4.396,4.396c0,0.81-0.656,1.465-1.465,1.465s-1.465-0.655-1.465-1.465c0-0.808-0.658-1.465-1.465-1.465          s-1.465,0.657-1.465,1.465s0.657,1.465,1.465,1.465c0.809,0,1.465,0.655,1.465,1.465S25.615,23.591,24.806,23.591z"
                                          />
                                          <path
                                            id="XMLID_59_"
                                            style={{ fill: "#120A24" }}
                                            d="M24.806,29.452c-2.424,0-4.396-1.972-4.396-4.396          c0-0.81,0.656-1.465,1.465-1.465s1.465,0.655,1.465,1.465c0,0.808,0.657,1.465,1.465,1.465s1.465-0.657,1.465-1.465          s-0.658-1.465-1.465-1.465c-0.809,0-1.465-0.655-1.465-1.465s0.656-1.465,1.465-1.465c2.424,0,4.396,1.972,4.396,4.396          S27.23,29.452,24.806,29.452z"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                    <path
                                      id="XMLID_58_"
                                      style={{ fill: "#120A24" }}
                                      d="M24.806,17.73c-0.809,0-1.465-0.655-1.465-1.465v-2.93       c0-0.81,0.656-1.465,1.465-1.465s1.465,0.655,1.465,1.465v2.93C26.271,17.074,25.615,17.73,24.806,17.73z"
                                    />
                                    <path
                                      id="XMLID_57_"
                                      style={{ fill: "#120A24" }}
                                      d="M24.806,32.382c-0.809,0-1.465-0.655-1.465-1.465v-2.93       c0-0.81,0.656-1.465,1.465-1.465s1.465,0.655,1.465,1.465v2.93C26.271,31.727,25.615,32.382,24.806,32.382z"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g id="XMLID_76_">
                                <g id="XMLID_77_">
                                  <path
                                    id="XMLID_54_"
                                    style={{ fill: "#120A24" }}
                                    d="M40.924,22.126c-0.809,0-1.465-0.655-1.465-1.465v-4.396h-4.396      c-0.809,0-1.465-0.655-1.465-1.465c0-0.81,0.656-1.465,1.465-1.465h5.861c0.809,0,1.465,0.655,1.465,1.465v5.861      C42.389,21.47,41.733,22.126,40.924,22.126z"
                                  />
                                  <path
                                    id="XMLID_52_"
                                    style={{ fill: "#120A24" }}
                                    d="M33.598,23.591c-0.375,0-0.75-0.143-1.036-0.429c-0.572-0.572-0.572-1.5,0-2.072      l7.326-7.326c0.572-0.572,1.5-0.572,2.072,0c0.572,0.572,0.572,1.5,0,2.072l-7.326,7.326      C34.347,23.448,33.972,23.591,33.598,23.591z"
                                  />
                                </g>
                              </g>
                              <path
                                id="XMLID_46_"
                                style={{ fill: "#120A24" }}
                                d="M8.688,30.917c-0.375,0-0.75-0.143-1.036-0.429c-0.572-0.572-0.572-1.5,0-2.072    l5.861-5.861c0.275-0.275,0.647-0.429,1.036-0.429h1.465c0.809,0,1.465,0.655,1.465,1.465c0,0.81-0.656,1.465-1.465,1.465h-0.859    l-5.432,5.432C9.438,30.774,9.063,30.917,8.688,30.917z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="comptContent">
                        <p>
                          {" "}
                          Live dynamic pricing with hundreds of
                          <strong> live stream data points </strong>, like
                          concurrent viewership, engagement, and demographics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="screenSection rightScreenSection">
                    <img src={ScreenThree} />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="screeNGrid">
                  <div className="leftTextPart textSection gradientBorder ">
                    <h1 className="title text-center fontStyle"> RUN </h1>
                    <p className="text-center screenTagLine">
                      {" "}
                      Large Scale campaigns with nano and macro influencers{" "}
                    </p>
                    <div className="competitiveRows">
                      <div className="iconForComp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                          style={{ enableBackground: "new 0 0 50 50" }}
                          xmlSpace="preserve"
                        >
                          <g id="Layer_1" style={{ display: "none" }}>
                            <g style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="SVGID_1_"
                                  points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                                />
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use
                                  xlinkHref="#SVGID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <polyline
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="14.246"
                                y1="24.366"
                                x2="19.907"
                                y2="19.059"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="36.889"
                                y1="15.079"
                                x2="41.135"
                                y2="11.099"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="31.228"
                                y1="17.733"
                                x2="24.153"
                                y2="17.733"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="10.001"
                                y1="32.327"
                                x2="10.001"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="15.662"
                                y1="32.327"
                                x2="15.662"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="21.322"
                                y1="24.366"
                                x2="21.322"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="26.983"
                                y1="24.366"
                                x2="26.983"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="32.644"
                                y1="24.366"
                                x2="32.644"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="38.304"
                                y1="24.366"
                                x2="38.304"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="43.965"
                                y1="41.614"
                                x2="43.965"
                                y2="15.079"
                              />
                            </g>
                          </g>
                          <g id="Layer_2" style={{ display: "none" }}>
                            <g id="XMLID_2_" style={{ display: "inline" }}>
                              <path
                                id="XMLID_17_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                              />
                              <polyline
                                id="XMLID_16_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                              />
                              <polygon
                                id="XMLID_15_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                              />
                              <line
                                id="XMLID_14_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="24.013"
                                x2="8.891"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_13_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="11.784"
                                x2="8.891"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_12_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="17.898"
                                x2="8.891"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_11_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="28.599"
                                x2="22.385"
                                y2="34.714"
                              />
                              <polyline
                                id="XMLID_10_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="11.889,30.128     16.387,30.128 16.387,34.714   "
                              />
                              <polyline
                                id="XMLID_9_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                              />
                              <line
                                id="XMLID_8_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="30.128"
                                x2="26.883"
                                y2="30.128"
                              />
                              <line
                                id="XMLID_7_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="24.013"
                                x2="32.88"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_6_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="17.898"
                                x2="32.88"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_5_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="11.784"
                                x2="32.88"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_4_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="7.198"
                                x2="22.385"
                                y2="1.083"
                              />
                              <polygon
                                id="XMLID_3_"
                                style={{ fill: "none" }}
                                points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                              />
                            </g>
                          </g>
                          <g id="Layer_3" style={{ display: "none" }}>
                            <g id="XMLID_18_" style={{ display: "inline" }}>
                              <polygon
                                id="XMLID_23_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="3.696,2.761     47.135,2.761 47.135,47.105 3.696,47.105 3.696,2.761   "
                              />
                              <line
                                id="XMLID_22_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="3.696"
                                y1="8.674"
                                x2="47.135"
                                y2="8.674"
                              />
                              <polyline
                                id="XMLID_21_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="16.728,20.499     22.52,26.411 16.728,32.324   "
                              />
                              <line
                                id="XMLID_20_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="25.416"
                                y1="30.846"
                                x2="34.104"
                                y2="30.846"
                              />
                              <polygon
                                id="XMLID_19_"
                                style={{ fill: "none" }}
                                points="2.248,48.583 48.583,48.583 48.583,1.283 2.248,1.283 2.248,48.583   "
                              />
                            </g>
                          </g>
                          <g id="Layer_4" style={{ display: "none" }}>
                            <g id="XMLID_30_" style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="XMLID_1_"
                                  points="12.517,49.48 36.5,49.48 36.5,0 12.517,0 12.517,49.48    "
                                />
                              </defs>
                              <clipPath id="XMLID_52_">
                                <use
                                  xlinkHref="#XMLID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <line
                                id="XMLID_28_"
                                style={{
                                  clipPath: "url(#XMLID_52_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="12.517"
                                y1="24.733"
                                x2="36.5"
                                y2="24.733"
                              />
                              <polyline
                                id="XMLID_27_"
                                style={{
                                  clipPath: "url(#XMLID_52_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    32.003,9.739 24.508,2.242 17.014,9.739   "
                              />
                              <line
                                id="XMLID_26_"
                                style={{
                                  clipPath: "url(#XMLID_52_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="2.242"
                                x2="24.508"
                                y2="20.234"
                              />
                              <polyline
                                id="XMLID_25_"
                                style={{
                                  clipPath: "url(#XMLID_52_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    17.014,39.726 24.508,47.223 32.003,39.726   "
                              />
                              <line
                                id="XMLID_24_"
                                style={{
                                  clipPath: "url(#XMLID_52_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="47.223"
                                x2="24.508"
                                y2="29.231"
                              />
                            </g>
                          </g>
                          <g id="Layer_5" style={{ display: "none" }}>
                            <g id="XMLID_35_" style={{ display: "inline" }}>
                              <path
                                id="XMLID_39_"
                                style={{ fill: "#120A24" }}
                                d="M48.187,12.249c-0.44-0.276-0.988-0.302-1.451-0.067l-9.778,4.959v-5.119    c0-1.669-1.339-3.027-2.984-3.027H4.13c-1.646,0-2.984,1.358-2.984,3.027v24.217c0,1.669,1.338,3.027,2.984,3.027h29.844    c1.645,0,2.984-1.358,2.984-3.027v-5.119l9.778,4.959c0.463,0.232,1.011,0.208,1.451-0.067c0.44-0.276,0.708-0.763,0.708-1.287    v-21.19C48.896,13.011,48.628,12.524,48.187,12.249z M45.911,32.276l-9.778-4.959c-0.463-0.234-1.012-0.208-1.452,0.067    c-0.439,0.276-0.707,0.763-0.707,1.287v7.568H4.13V12.023h29.844v7.568c0,0.525,0.268,1.012,0.707,1.287    c0.44,0.275,0.989,0.299,1.452,0.067l9.778-4.959V32.276z"
                              />
                              <path
                                id="XMLID_36_"
                                style={{ fill: "#120A24" }}
                                d="M26.488,18.199c-0.973-1.059-2.275-1.643-3.666-1.643l-0.001,0    c-1.391,0.001-2.691,0.584-3.661,1.64l-0.109,0.118l-0.103-0.111c-0.971-1.059-2.271-1.64-3.661-1.64c0,0-0.001,0-0.003,0    c-1.389,0-2.691,0.581-3.666,1.642c-1.935,2.116-1.936,5.557,0.006,7.682l6.342,6.848c0.282,0.304,0.676,0.477,1.088,0.477    s0.806-0.173,1.088-0.477l6.348-6.855c1.935-2.117,1.934-5.562-0.001-7.678C26.49,18.201,26.489,18.2,26.488,18.199z     M24.309,23.815l-5.254,5.674l-5.247-5.666c-0.882-0.966-0.882-2.597-0.003-3.559c0.403-0.438,0.929-0.679,1.481-0.679    c0.001,0,0.001,0,0.001,0c0.552,0.001,1.078,0.242,1.475,0.676l1.189,1.302c0.283,0.309,0.682,0.46,1.095,0.485    c0.412,0,0.807-0.173,1.089-0.478l1.207-1.306c0.803-0.875,2.158-0.876,2.963,0C25.185,21.227,25.184,22.857,24.309,23.815z"
                              />
                            </g>
                          </g>
                          <g id="Layer_6">
                            <g id="XMLID_47_">
                              <g id="XMLID_60_">
                                <g id="XMLID_67_">
                                  <g id="XMLID_68_">
                                    <g id="XMLID_69_">
                                      <g id="XMLID_70_">
                                        <path
                                          id="XMLID_45_"
                                          style={{ fill: "#120A24" }}
                                          d="M26.482,47.986h-2.998c-2.48,0-4.497-2.017-4.497-4.497v-2.538         c-0.6-0.211-1.184-0.452-1.752-0.722l-1.792,1.792c-1.754,1.754-4.605,1.754-6.359,0l-2.12-2.12         c-0.849-0.849-1.317-1.978-1.317-3.179c0-1.202,0.468-2.33,1.317-3.18l1.792-1.792c-0.269-0.566-0.511-1.151-0.722-1.751         H5.497C3.017,29.999,1,27.982,1,25.502v-2.998c0-2.48,2.017-4.497,4.497-4.497h2.538c0.211-0.6,0.452-1.185,0.722-1.751         l-1.792-1.792c-0.849-0.849-1.317-1.978-1.317-3.179s0.468-2.33,1.317-3.18l2.12-2.119c1.754-1.754,4.605-1.754,6.359,0         l2.566,2.565c0.586,0.585,0.586,1.534,0,2.12s-1.534,0.586-2.12,0l-2.566-2.565c-0.586-0.584-1.534-0.584-2.12,0l-2.12,2.12         c-0.284,0.283-0.439,0.659-0.439,1.06c0,0.4,0.155,0.777,0.439,1.059l2.566,2.567c0.474,0.474,0.575,1.206,0.249,1.792         c-0.558,0.996-1.004,2.077-1.326,3.214c-0.183,0.645-0.771,1.09-1.442,1.09H5.497c-0.827,0-1.499,0.673-1.499,1.499v2.998         c0,0.826,0.672,1.499,1.499,1.499h3.635c0.67,0,1.259,0.445,1.442,1.09c0.322,1.137,0.768,2.218,1.326,3.214         c0.326,0.586,0.225,1.317-0.249,1.792l-2.566,2.566c-0.284,0.283-0.439,0.659-0.439,1.06c0,0.4,0.157,0.777,0.439,1.06         l2.12,2.12c0.586,0.584,1.534,0.584,2.12,0l2.566-2.565c0.476-0.474,1.206-0.575,1.792-0.249         c0.997,0.558,2.077,1.003,3.213,1.325c0.646,0.183,1.091,0.771,1.091,1.442v3.635c0,0.826,0.672,1.499,1.499,1.499h2.998         c0.827,0,1.499-0.673,1.499-1.499v-3.635c0-0.67,0.445-1.259,1.091-1.442c1.136-0.322,2.216-0.768,3.213-1.325         c0.586-0.327,1.317-0.225,1.792,0.249l2.566,2.565c0.586,0.584,1.534,0.584,2.12,0l2.12-2.12         c0.283-0.283,0.439-0.66,0.439-1.06c0-0.4-0.155-0.777-0.439-1.059l-2.566-2.567c-0.474-0.474-0.575-1.206-0.249-1.792         c0.558-0.996,1.004-2.077,1.326-3.214c0.183-0.645,0.771-1.09,1.442-1.09h3.635c0.827,0,1.499-0.673,1.499-1.499v-2.998         c0-0.828,0.67-1.499,1.499-1.499c0.829,0,1.499,0.671,1.499,1.499v2.998c0,2.48-2.017,4.497-4.497,4.497h-2.538         c-0.211,0.6-0.452,1.185-0.722,1.751l1.792,1.792c0.849,0.849,1.317,1.978,1.317,3.179c0,1.201-0.468,2.33-1.317,3.179         l-2.12,2.12c-1.754,1.754-4.605,1.754-6.359,0l-1.792-1.792c-0.568,0.269-1.152,0.511-1.752,0.722v2.538         C30.979,45.969,28.961,47.986,26.482,47.986z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g id="XMLID_65_">
                                  <circle
                                    id="XMLID_44_"
                                    style={{ fill: "#120A24" }}
                                    cx="24.983"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                                <g id="XMLID_63_">
                                  <circle
                                    id="XMLID_43_"
                                    style={{ fill: "#120A24" }}
                                    cx="30.979"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                                <g id="XMLID_61_">
                                  <circle
                                    id="XMLID_42_"
                                    style={{ fill: "#120A24" }}
                                    cx="18.987"
                                    cy="28.5"
                                    r="1.499"
                                  />
                                </g>
                              </g>
                              <g id="XMLID_48_">
                                <g id="XMLID_49_">
                                  <g id="XMLID_50_">
                                    <g id="XMLID_55_">
                                      <path
                                        id="XMLID_56_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,12.012c-5.223,0-10.492-1.391-10.492-4.497s5.27-4.497,10.492-4.497        S42.97,4.409,42.97,7.515S37.7,12.012,32.477,12.012z M25.119,7.515c0.704,0.554,3.216,1.499,7.358,1.499        s6.654-0.945,7.358-1.499c-0.704-0.554-3.216-1.499-7.358-1.499S25.823,6.961,25.119,7.515z M40.012,7.695h0.015H40.012z"
                                      />
                                    </g>
                                    <g id="XMLID_53_">
                                      <path
                                        id="XMLID_37_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,18.008c-5.223,0-10.492-1.391-10.492-4.497V7.515        c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.868c0.441,0.521,3.014,1.626,7.495,1.626        c4.481,0,7.054-1.105,7.495-1.626V7.515c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.996        C42.97,16.617,37.7,18.008,32.477,18.008z"
                                      />
                                    </g>
                                    <g id="XMLID_51_">
                                      <path
                                        id="XMLID_34_"
                                        style={{ fill: "#120A24" }}
                                        d="M32.477,24.004c-5.223,0-10.492-1.391-10.492-4.497v-5.996        c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.868c0.441,0.521,3.014,1.626,7.495,1.626        c4.481,0,7.054-1.105,7.495-1.626v-5.868c0-0.828,0.67-1.499,1.499-1.499s1.499,0.671,1.499,1.499v5.996        C42.97,22.613,37.7,24.004,32.477,24.004z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="comptContent">
                        <p>
                          {" "}
                          Machine-learning driven{" "}
                          <strong>
                            {" "}
                            image and voice recognition validation engine
                          </strong>
                          for verified campaign results
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="screenSection rightScreenSection">
                    <img src={ScreenTwo} />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="screeNGrid">
                  <div className="leftTextPart textSection gradientBorder ">
                    <h1 className="title text-center fontStyle"> REACH </h1>
                    <p className="text-center screenTagLine">
                      {" "}
                      Highly engaged and loyal communities{" "}
                    </p>
                    <div className="competitiveRows">
                      <div className="iconForComp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                          style={{ enableBackground: "new 0 0 50 50" }}
                          xmlSpace="preserve"
                        >
                          <g id="Layer_1" style={{ display: "none" }}>
                            <g style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="SVGID_1_"
                                  points="2.925,46.921 48.21,46.921 48.21,4.466 2.925,4.466 2.925,46.921    "
                                />
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use
                                  xlinkHref="#SVGID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <polyline
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                points="    48.21,45.594 5.755,45.594 4.34,45.594 4.34,4.466   "
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M36.889,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S36.889,16.267,36.889,17.733    L36.889,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M46.795,8.446    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S46.795,6.98,46.795,8.446L46.795,8.446z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M24.153,17.733    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S24.153,16.267,24.153,17.733    L24.153,17.733z"
                              />
                              <path
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                d="M15.662,25.693    c0,1.465-1.267,2.653-2.83,2.653s-2.83-1.188-2.83-2.653c0-1.465,1.267-2.653,2.83-2.653S15.662,24.228,15.662,25.693    L15.662,25.693z"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="14.246"
                                y1="24.366"
                                x2="19.907"
                                y2="19.059"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="36.889"
                                y1="15.079"
                                x2="41.135"
                                y2="11.099"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="31.228"
                                y1="17.733"
                                x2="24.153"
                                y2="17.733"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="10.001"
                                y1="32.327"
                                x2="10.001"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="15.662"
                                y1="32.327"
                                x2="15.662"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="21.322"
                                y1="24.366"
                                x2="21.322"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="26.983"
                                y1="24.366"
                                x2="26.983"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="32.644"
                                y1="24.366"
                                x2="32.644"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="38.304"
                                y1="24.366"
                                x2="38.304"
                                y2="41.614"
                              />
                              <line
                                style={{
                                  clipPath: "url(#SVGID_2_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "1.9931",
                                  strokeMiterlimit: 10
                                }}
                                x1="43.965"
                                y1="41.614"
                                x2="43.965"
                                y2="15.079"
                              />
                            </g>
                          </g>
                          <g id="Layer_2" style={{ display: "none" }}>
                            <g id="XMLID_2_" style={{ display: "inline" }}>
                              <path
                                id="XMLID_17_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                d="M28.382,39.299h7.497    c2.489,0,4.498-2.048,4.498-4.586v-4.586h2.999c0.825,0,1.499-0.688,1.499-1.529l-2.999-10.701    c0-8.453-6.702-15.286-14.994-15.286"
                              />
                              <polyline
                                id="XMLID_16_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="34.38,39.299     34.38,48.471 16.387,48.471 16.387,34.714   "
                              />
                              <polygon
                                id="XMLID_15_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="13.389,11.784     25.384,11.784 25.384,24.013 13.389,24.013 13.389,11.784   "
                              />
                              <line
                                id="XMLID_14_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="24.013"
                                x2="8.891"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_13_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="11.784"
                                x2="8.891"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_12_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="5.892"
                                y1="17.898"
                                x2="8.891"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_11_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="28.599"
                                x2="22.385"
                                y2="34.714"
                              />
                              <polyline
                                id="XMLID_10_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="11.889,30.128     16.387,30.128 16.387,34.714   "
                              />
                              <polyline
                                id="XMLID_9_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                points="17.887,2.612     16.387,2.612 16.387,5.669 11.889,5.669   "
                              />
                              <line
                                id="XMLID_8_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="30.128"
                                x2="26.883"
                                y2="30.128"
                              />
                              <line
                                id="XMLID_7_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="24.013"
                                x2="32.88"
                                y2="24.013"
                              />
                              <line
                                id="XMLID_6_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="17.898"
                                x2="32.88"
                                y2="17.898"
                              />
                              <line
                                id="XMLID_5_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="29.882"
                                y1="11.784"
                                x2="32.88"
                                y2="11.784"
                              />
                              <line
                                id="XMLID_4_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.5689",
                                  strokeMiterlimit: 10
                                }}
                                x1="22.385"
                                y1="7.198"
                                x2="22.385"
                                y2="1.083"
                              />
                              <polygon
                                id="XMLID_3_"
                                style={{ fill: "none" }}
                                points="5.892,50 46.375,50 46.375,1.083 5.892,1.083 5.892,50   "
                              />
                            </g>
                          </g>
                          <g id="Layer_3" style={{ display: "none" }}>
                            <g id="XMLID_18_" style={{ display: "inline" }}>
                              <polygon
                                id="XMLID_23_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="3.696,2.761     47.135,2.761 47.135,47.105 3.696,47.105 3.696,2.761   "
                              />
                              <line
                                id="XMLID_22_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="3.696"
                                y1="8.674"
                                x2="47.135"
                                y2="8.674"
                              />
                              <polyline
                                id="XMLID_21_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                points="16.728,20.499     22.52,26.411 16.728,32.324   "
                              />
                              <line
                                id="XMLID_20_"
                                style={{
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.1703",
                                  strokeMiterlimit: 10
                                }}
                                x1="25.416"
                                y1="30.846"
                                x2="34.104"
                                y2="30.846"
                              />
                              <polygon
                                id="XMLID_19_"
                                style={{ fill: "none" }}
                                points="2.248,48.583 48.583,48.583 48.583,1.283 2.248,1.283 2.248,48.583   "
                              />
                            </g>
                          </g>
                          <g id="Layer_4" style={{ display: "none" }}>
                            <g id="XMLID_30_" style={{ display: "inline" }}>
                              <defs>
                                <polygon
                                  id="XMLID_1_"
                                  points="12.517,49.48 36.5,49.48 36.5,0 12.517,0 12.517,49.48    "
                                />
                              </defs>
                              <clipPath id="XMLID_37_">
                                <use
                                  xlinkHref="#XMLID_1_"
                                  style={{ overflow: "visible" }}
                                />
                              </clipPath>
                              <line
                                id="XMLID_28_"
                                style={{
                                  clipPath: "url(#XMLID_37_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="12.517"
                                y1="24.733"
                                x2="36.5"
                                y2="24.733"
                              />
                              <polyline
                                id="XMLID_27_"
                                style={{
                                  clipPath: "url(#XMLID_37_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    32.003,9.739 24.508,2.242 17.014,9.739   "
                              />
                              <line
                                id="XMLID_26_"
                                style={{
                                  clipPath: "url(#XMLID_37_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="2.242"
                                x2="24.508"
                                y2="20.234"
                              />
                              <polyline
                                id="XMLID_25_"
                                style={{
                                  clipPath: "url(#XMLID_37_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                points="    17.014,39.726 24.508,47.223 32.003,39.726   "
                              />
                              <line
                                id="XMLID_24_"
                                style={{
                                  clipPath: "url(#XMLID_37_)",
                                  fill: "none",
                                  stroke: "#9966FF",
                                  strokeWidth: "2.6628",
                                  strokeMiterlimit: 10
                                }}
                                x1="24.508"
                                y1="47.223"
                                x2="24.508"
                                y2="29.231"
                              />
                            </g>
                          </g>
                          <g id="Layer_5">
                            <g id="XMLID_35_">
                              <path
                                id="XMLID_39_"
                                style={{ fill: "#120A24" }}
                                d="M48.187,12.249c-0.44-0.276-0.988-0.302-1.451-0.067l-9.778,4.959v-5.119    c0-1.669-1.339-3.027-2.984-3.027H4.13c-1.646,0-2.984,1.358-2.984,3.027v24.217c0,1.669,1.338,3.027,2.984,3.027h29.844    c1.645,0,2.984-1.358,2.984-3.027v-5.119l9.778,4.959c0.463,0.232,1.011,0.208,1.451-0.067c0.44-0.276,0.708-0.763,0.708-1.287    v-21.19C48.896,13.011,48.628,12.524,48.187,12.249z M45.911,32.276l-9.778-4.959c-0.463-0.234-1.012-0.208-1.452,0.067    c-0.439,0.276-0.707,0.763-0.707,1.287v7.568H4.13V12.023h29.844v7.568c0,0.525,0.268,1.012,0.707,1.287    c0.44,0.275,0.989,0.299,1.452,0.067l9.778-4.959V32.276z"
                              />
                              <path
                                id="XMLID_36_"
                                style={{ fill: "#120A24" }}
                                d="M26.488,18.199c-0.973-1.059-2.275-1.643-3.666-1.643l-0.001,0    c-1.391,0.001-2.691,0.584-3.661,1.64l-0.109,0.118l-0.103-0.111c-0.971-1.059-2.271-1.64-3.661-1.64c0,0-0.001,0-0.003,0    c-1.389,0-2.691,0.581-3.666,1.642c-1.935,2.116-1.936,5.557,0.006,7.682l6.342,6.848c0.282,0.304,0.676,0.477,1.088,0.477    s0.806-0.173,1.088-0.477l6.348-6.855c1.935-2.117,1.934-5.562-0.001-7.678C26.49,18.201,26.489,18.2,26.488,18.199z     M24.309,23.815l-5.254,5.674l-5.247-5.666c-0.882-0.966-0.882-2.597-0.003-3.559c0.403-0.438,0.929-0.679,1.481-0.679    c0.001,0,0.001,0,0.001,0c0.552,0.001,1.078,0.242,1.475,0.676l1.189,1.302c0.283,0.309,0.682,0.46,1.095,0.485    c0.412,0,0.807-0.173,1.089-0.478l1.207-1.306c0.803-0.875,2.158-0.876,2.963,0C25.185,21.227,25.184,22.857,24.309,23.815z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="comptContent">
                        <p>
                          {" "}
                          <strong>Agile marketing </strong> with sponsor stream
                          overlay, underlay, and traditional influencer product
                          placement campaigns
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="screenSection rightScreenSection">
                    <img src={ScreenOne} />
                  </div>
                </div>
              </div>
            </div>
            <div className="brandPageSlider">
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="prev-arrow">
                  {" "}
                  <img src={ArrowsDirection} />
                </span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="next-arrow">
                  {" "}
                  <img src={ArrowsDirection} />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Brands;
