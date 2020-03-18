import React, { Component } from 'react'
import headerImage from "../images/header-image.png";
import navImage from "../images/navImage.png";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import TwitchIcon from "../images/twitchIcon.png";
import $ from "jquery";

  class Header extends Component {
    componentDidMount() {
      this.loadJQuery();
    }

    loadJQuery() {
      $("#navbarSupportedContent .navbar-nav .nav-item a").click(function() {
        $("#navbarSupportedContent .navbar-nav .nav-item").removeClass(
          "active"
        );
        $(this)
          .parent(".nav-item")
          .addClass("active");
      });
      if ($(window).width() < 530) {
        var text = $(".signUpLink .signUpTwitch span").text();
        $(".signUpLink .signUpTwitch span").text(
          text.replace("Sign up with Twitch", "Sign up")
        );
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
      if (this.props.onSignUpClicked) {
        this.props.onSignUpClicked();
      }
    }
    
    render() {
      var headerImg = {
        width: "auto",
        height: "9.5vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPosition: "-1px",
        backgroundColor: "#250453",
        backgroundImage: `url(${headerImage})`
      };
      var navigationImage = {
        width: "auto",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${navImage})`
      };

      return (
        <header className="headerBar">
          <div className="headerImage" style={headerImg}>
            <div class="container logoContainer">
              <div class="logo">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
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
          <div className="navigationItems" style={navigationImage}>
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="menuIcon">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link homePage" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link brandsItem" to="/brands">
                      Brands
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link streamsItem" to="/streamers">
                      Streamers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link aboutItem" to="/about">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="headerFonts">
                <ul className="icons">
                  <li>
                    {" "}
                    <a href="#" title="Instagram">
                      {" "}
                      <i class="fa fa-instagram"></i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" title="Twitter">
                      {" "}
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" title="Facebook">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Youtube">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }


export default Header;