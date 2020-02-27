import React, { Component } from "react";
import Headphones from "../images/about_us/headphones.png";
import BottomOverlay from "../images/about_us/bottomOverlay.png";
import NlfuenceLogo from "../images/about_us/nlfuenceLogo.png";
import BottomLine from "../images/about_us/bottomLine.png";
import Decentralized from "../images/about_us/decentralized.png";
import HelpBrands from "../images/about_us/helpBrands.png";
import SupportStreamers from "../images/about_us/supportStreamers.png";

 class About extends Component {


  render() {
    
    var footerBackground={
          height : "1000px",
          width : "auto",
          backgroundPosition : "center",
          backgroundRepeat : "no-repeat",
          backgroundSize : "cover",
          backgroundImage : `url(${BottomOverlay})`
    };

    return (
      <main class="mainSection">
        <section class="container-fluid">
          <div class="row">
            <div class="col-6">
              <img src={Headphones} style={{ height:"100%", width:"100%" }}></img>
            </div>
            <div class="col-6">
              <div class="aboutSection1">
                <h1>
                  About us
                </h1>
                <p>
                    We are a team of eSports and gaming industry veterans. We’ve worked with companies like
                    Activision, Major League Gaming, Riot Games, THQ, Fnatic, and many more. We love gaming
                    and we champion the talented gaming community.
                </p>
                
              </div>
              <div class="row aboutSection2" style={{ marginTop:100 }}>
                <div class="col-4 decentralized">
                  <img src={Decentralized}></img>
                  <br/>
                  <p>
                    DECENTRALIZED
                  </p>
                  <p>
                    gamer influencing
                    marketing economy
                  </p>
                  
                </div>
                <div class="col-4">
                  <img src={SupportStreamers}></img>
                  <br/>
                  <p>
                    SUPPORT STREAMERS
                  </p>
                  <p>
                    leverage and monetize
                    their influence
                  </p>
                </div>
                <div class="col-4">
                  <img src={HelpBrands}></img>
                  <br/>
                  <p>
                    HELP BRANDS
                  </p>
                  <p>
                    connect with
                    highly engaged audiences
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section class="container-fluid" id="footerSection" style={footerBackground}>
          <div class="footerTitle">
            <h4>WHY WE ARE</h4>
            <h1>The Gap</h1>
          </div>
          <div class="row justify-content-md-center footerContent" >
            <div class="col-3 brands">
              <h3>
                BRANDS
                <hr   align="right" class="underLine"/>
              </h3>
              <p>Have <span>budget</span></p>
              <p>Want <span>influencer marketing campaigns</span></p>
              <p>Don't know how to <span>connect with streamers</span></p>
            </div>
            <div class="col-3">
                <div class="row justify-content-center">
                  <div class="col-1 verticalLine"></div>
                  <div class="col-10 nfluence">
                  <img class="nfluenceLogo" src={NlfuenceLogo} />
                  <br/>
                  <img  class="nfluenceLogoLine" src={BottomLine}/>
                  </div>
                  <div class="col-1 verticalLine"></div>
                </div>
            </div>
            <div class="col-3 streamers">
              <h3 class="text-left">
                STREAMERS
                <hr   align="left" class="underLine"/>
              </h3>
              <p>Have <span>highly engaged audiences</span></p>
              <p>Want to <span>monetize their stream</span></p>
              <p>Don't know how to <span>connect with brands</span></p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}


export default About;