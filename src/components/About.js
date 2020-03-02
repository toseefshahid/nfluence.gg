import React, { Component } from "react";
import Headphones from "../images/about_us/headphones.png";
import BottomOverlay from "../images/about_us/bottomOverlay.png";
import NlfuenceLogo from "../images/about_us/nlfuenceLogo.png";
import BottomLine from "../images/about_us/bottomLine.png";
import Decentralized from "../images/about_us/decentralized.png";
import HelpBrands from "../images/about_us/helpBrands.png";
import SupportStreamers from "../images/about_us/supportStreamers.png";
import $ from "jquery";

 class About extends Component {
   componentDidMount() {
     this.loadJQuery();
   }


   loadJQuery() {
     if (window.location.href.indexOf("about") > -1) {
       $("#navbarSupportedContent .navbar-nav .nav-item").removeClass("active");
       $(".aboutItem")
         .parent(".nav-item")
         .addClass("active");
     }
   }

   render() {
     var footerBackground = {
       height: "auto",
       width: "auto",
       backgroundPosition: "top",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       backgroundImage: `url(${BottomOverlay})`
     };

     return (
       <main class="mainSection">
         <section class="container">
           <div class="row">
             <div class="col-md-12 col-lg-6">
               <img
                 src={Headphones}
                 style={{ height: "100%", width: "100%" }}
               ></img>
             </div>
             <div class="col-md-12 col-lg-6">
               <div class="aboutSection1">
                 <h1>About us</h1>
                 <p>
                   We are a team of eSports and gaming industry veterans. We’ve
                   worked with companies like Activision, Major League Gaming,
                   Riot Games, THQ, Fnatic, and many more. We love gaming and we
                   champion the talented gaming community.
                 </p>
               </div>
               <div class="aboutSection2">
                 <div class="row">
                   <div class="col-sm-12 col-md-4 col-lg-4 ">
                     <img src={Decentralized}></img>
                     <h2 className="title text-center">DECENTRALIZED</h2>
                     <p>
                       gamer influencing
                       <br />
                       marketing economy
                     </p>
                   </div>
                   <div class="col-sm-12 col-md-4 col-lg-4 ">
                     <img src={SupportStreamers}></img>
                     <h2 className="title text-center">SUPPORT STREAMERS</h2>
                     <p>
                       leverage and monetize
                       <br />
                       their influence
                     </p>
                   </div>
                   <div class="col-sm-12 col-md-4 col-lg-4 ">
                     <img src={HelpBrands}></img>
                     <h2 className="title text-center">HELP BRANDS</h2>
                     <p>
                       connect with
                       <br />
                       highly engaged audiences
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <section class="grap" id="footerSection" style={footerBackground}>
           <div class="container">
             <div class="row">
               <div class="col-md-12">
                 <div class="footerTitle">
                   <h4>WHY WE ARE</h4>
                   <h1>The Gap</h1>
                 </div>
               </div>
             </div>
             <div class="row justify-content-md-center footerContent">
               <div class="col-md-12 col-lg-4">
                 <div className="brands">
                   <h3>
                     BRANDS
                     <hr align="right" class="underLine" />
                   </h3>
                   <p>
                     Have <span>budget</span>
                   </p>
                   <p>
                     Want <span>influencer marketing campaigns</span>
                   </p>
                   <p>
                     Don't know how to <span>connect with streamers</span>
                   </p>
                 </div>
               </div>
               <div class="col-md-12 col-lg-4">
                 <div class="row justify-content-center">
                   <div class="col-1 verticalLine"></div>
                   <div class="col-md-9 nfluence">
                     <img class="nfluenceLogo" src={NlfuenceLogo} />
                     <br />
                     <img class="nfluenceLogoLine" src={BottomLine} />
                   </div>
                   <div class="col-1 verticalLine"></div>
                 </div>
               </div>
               <div class="col-md-12 col-lg-4">
                 <div class="streamers">
                   <h3 class="text-left">
                     STREAMERS
                     <hr align="left" class="underLine" />
                   </h3>
                   <p>
                     Have <span>highly engaged audiences</span>
                   </p>
                   <p>
                     Want to <span>monetize their stream</span>
                   </p>
                   <p>
                     Don't know how to <span>connect with brands</span>
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </main>
     );
   }
 }


export default About;