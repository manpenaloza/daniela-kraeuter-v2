import React from "react";
import Img from "gatsby-image";
import Button from "../../common/components/button";
import { Section } from "react-scroll-section";
import Fade from "react-reveal/Fade";

export default (props) => (
  <Section
    id="blogPostMainTeaser"
    className="min-h-screen flex flex-column text-gray font-sans-serif "
  >
    <Fade bottom>
      <div className="relative">
        <Img
          className="w-full h-1/3 md:h-half"
          fluid={props.image}
          alt={`Neuester Blog Post von Daniela Sohneg ${props.title}`}
        />
        {/* Upcoming div simply dealing as an image overlay to properly support website colors */}
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-secondary opacity-25" />
      </div>
      <div className="flex-1  bg-near-white py-10 text-center">
        <h2 className="max-w-2xl lg:max-w-3xl text-2xl md:text-3xl lg:text-5xl leading-normal pb-10 center">
          {props.title}
        </h2>
        <Button.PrimaryWithPageChange to={props.to}>
          Artikel lesen
        </Button.PrimaryWithPageChange>
      </div>
    </Fade>
  </Section>
);
