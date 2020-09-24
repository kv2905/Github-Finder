import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." style={loadingStyle} />
  </Fragment>
);

const loadingStyle = {
  width: "200px",
  display: "block",
  margin: "auto",
};

export default Spinner;
