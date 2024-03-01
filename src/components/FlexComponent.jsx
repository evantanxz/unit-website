import clsx from "clsx";
import React from "react";

const FlexComponents = ({ children, className }) => {
  return <div className={clsx("flex-component", className)}>{children}</div>;
};

export default FlexComponents;
