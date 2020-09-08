import React from "react";
import MultiLink from "gatsby-universal-link";

const btnPrimaryClassNames =
  "inline-block py-3 lg:py-4 px-12 lg:px-14 text-xl hover:shadow-md uppercase text-near-white font-sans-serif font-extrabold no-underline transform hover:scale-97 transition ease-in-out duration-100 rounded-lg hover:text-shadow-gray cursor-pointer tracking-wider";

const PrimaryButtonWithPageChange = ({
  children,
  to = "/",
  classNames = "",
  colorClassName = "bg-secondary",
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
  colorClassName = "bg-secondary",
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

export { btnPrimaryClassNames };
