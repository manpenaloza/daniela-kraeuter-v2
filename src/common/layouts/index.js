import React from "react";
import { Helmet } from "react-helmet";
import { ScrollingProvider } from "react-scroll-section";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "tachyons";
import "../styles/tailwind.css";
import "../styles/custom.tachyons.css";

export default (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <body className="bg-near-white mid-gray" />
      </Helmet>
      <ScrollingProvider>
        <Navbar />
        <div className="font-serif leading-loose text-base text-mid-gray">
          {props.children}
        </div>
        <Footer />
      </ScrollingProvider>
    </React.Fragment>
  );
};
