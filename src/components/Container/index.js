import React from "react";

function Container(props) {
  return <section className="container" style={props.style}>{props.children}</section>;
}

export default Container;
