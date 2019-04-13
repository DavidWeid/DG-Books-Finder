import React from "react";

const Row = props => (
  <div className={`mx-auto row${props.fluid ? "-fluid" : ""}`} {...props} />
);

export default Row;
