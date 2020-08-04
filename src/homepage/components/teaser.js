import React from "react";
import Img from "gatsby-image";
import Button from "../../common/components/button";

export default (props) => (
  <section className="min-h-screen flex flex-column text-mid-gray">
    <div className="relative">
      <Img
        className="w-full h-1/3 md:h-half"
        fluid={props.image}
        alt={`Blog Post Daniela Sohneg ${props.title}`}
      />
      {/* Upcoming div simply dealing as an image overlay to properly support website colors */}
      <div className="absolute bottom-0 top-0 left-0 right-0 bg-secondary opacity-10" />
    </div>
    <div className="flex-1 container bg-near-white py-10 text-center">
      <h2 className="font-serif max-w-2xl lg:max-w-3xl text-2xl md:text-3xl lg:text-5xl leading-normal pb-10 center">
        {props.title}
      </h2>
      <Button.PrimaryWithPageChange to={props.to}>
        Artikel lesen
      </Button.PrimaryWithPageChange>
    </div>
  </section>
);
