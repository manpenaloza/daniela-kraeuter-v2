import React from "react";
import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
// import "tachyons";
import "../styles/tailwind.css";
// import "../styles/custom.tachyons.css";

export default (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-near-white mid-gray" />
    </Helmet>
    <Fade>
      <Navbar />
    </Fade>
    <div className="serif leading-loose text-lg">
      {props.children}
      <small
        className="hidden lg:block copyright fixed origin-bottom-left white text-sm sans-serif"
      >
        
        © Daniela Sohneg | 2020
        
      </small>
    </div>
    <Footer />
  </React.Fragment>
);
