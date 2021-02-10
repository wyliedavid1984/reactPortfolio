import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <section className={size}>{props.children}</section>;
}

export default Col;
