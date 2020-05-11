import React from "react";
import { Helmet } from "react-helmet";
import { ScrollingProvider } from "react-scroll-section";
import useIsScrolled from "use-is-scrolled";
import Slide from "react-reveal/Fade";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "tachyons";
import "../styles/tailwind.css";
import "../styles/custom.tachyons.css";

export default (props) => {
  const isScrolled = useIsScrolled();
  return (
    <React.Fragment>
      <Helmet>
        <body className="bg-near-white mid-gray" />
      </Helmet>
      <ScrollingProvider>
        <Navbar />
        <div className="font-serif leading-loose text-base text-mid-gray">
          {props.children}
          {!isScrolled && (
            <small
              className={`hidden copyright xl:block fixed origin-bottom-left text-near-white text-sm font-sans-serif`}
            >
              © Daniela Sohneg | 2020
            </small>
          )}
        </div>
        <Footer />
      </ScrollingProvider>
    </React.Fragment>
  );
};
