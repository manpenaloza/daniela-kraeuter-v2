import React from "react";
import { Link } from "gatsby";
import MultiLink from "gatsby-universal-link";

const btnPrimaryClassnames =
  "py-5 px-16 font-bold hover:shadow-md uppercase bg-violett white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100 rounded-lg hover:text-shadow-gray cursor-pointer";

const PrimaryButtonWithPageChange = ({
  children,
  to = "/",
  classNames = "",
  ...props
}) => (
  <Link className={`${btnPrimaryClassnames} ${classNames}`} to={to} {...props}>
    {children}
  </Link>
);

const PrimaryButtonWithPageScroll = ({
  children,
  scrollToId,
  classNames = "",
  ...props
}) => (
  <MultiLink
    scrollToId={scrollToId}
    {...props}
    className={`${btnPrimaryClassnames} ${classNames}`}
  >
    {children}
  </MultiLink>
);

export default {
  PrimaryWithPageScroll: PrimaryButtonWithPageScroll,
  PrimaryWithPageChange: PrimaryButtonWithPageChange,
};
