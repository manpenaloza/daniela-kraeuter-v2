import React from "react";
import MultiLink from "gatsby-universal-link";

const btnPrimaryClassNames =
  "py-3 lg:py-4 px-12 lg:px-16 text-xl font-bold hover:shadow-md uppercase text-near-white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100 rounded-lg hover:text-shadow-gray cursor-pointer";

const PrimaryButtonWithPageChange = ({
  children,
  to = "/",
  classNames = "",
  colorClassName = "bg-violett",
  ...props
}) => (
  <MultiLink
    className={`${btnPrimaryClassNames} ${classNames} ${colorClassName}`}
    to={to}
    {...props}
  >
    {children}
  </MultiLink>
);

const PrimaryButtonWithPageScroll = ({
  children,
  scrollToId,
  classNames = "",
  colorClassName = "bg-violett",
  ...props
}) => (
  <MultiLink
    scrollToId={scrollToId}
    {...props}
    className={`${btnPrimaryClassNames} ${classNames} ${colorClassName}`}
  >
    {children}
  </MultiLink>
);

export default {
  PrimaryWithPageScroll: PrimaryButtonWithPageScroll,
  PrimaryWithPageChange: PrimaryButtonWithPageChange,
};
